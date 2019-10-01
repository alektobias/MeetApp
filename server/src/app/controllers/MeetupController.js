import { isBefore, startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Meetup from '../models/Meetup';

class MeetupController {
	async index(req, res) {
		const where = {};
		const page = req.query.page || 1;

		if (req.query.date) {
			const searchDate = parseISO(req.query.date);

			where.date = {
				[Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
			};
		}

		const meetups = await Meetup.findAll({
			where,
			include: [{ model: User }],
			limit: 10,
			offset: 10 * (page - 1),
		});

		return res.json(meetups);
	}

	async store(req, res) {
		if (isBefore(parseISO(req.body.date), new Date())) {
			return res.status(400).json({ error: 'Invalid date.' });
		}
		const user_id = req.userId;

		const meetup = await Meetup.create({
			...req.body,
			user_id,
		});

		return res.json(meetup);
	}

	async update(req, res) {
		const { date, id } = req.body;

		const meetup = await Meetup.findByPk(id);

		if (!meetup) {
			return res.status(400).json({ error: 'No meetup found.' });
		}

		if (meetup.user_id !== req.userId) {
			return res.status(401).json({ error: 'Not Authorized' });
		}

		if (isBefore(date, new Date())) {
			return res.status(400).json({ error: 'Invalid date.' });
		}

		if (meetup.past) {
			return res.status(400).json({ error: "Can't update past meetups." });
		}

		await meetup.update(req.body);

		return res.json(meetup);
	}

	async delete(req, res) {
		const meetup = await Meetup.findByPk(req.query.id);

		if (!meetup) {
			return res.status(400).json({ error: 'No meetup found.' });
		}

		if (meetup.user_id !== req.userId) {
			return res.status(401).json({ error: 'Not authorized.' });
		}

		if (meetup.past) {
			return res.status(400).json({ error: "Can't delete past meetups." });
		}

		await meetup.destroy();

		return res.json({ message: 'Meetup deleted' });
	}
}
export default new MeetupController();
