import * as Yup from 'yup';
import User from '../models/User';

class UserController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			password: Yup.string()
				.required()
				.min(6),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails' });
		}

		const { email } = req.body;
		const userExists = await User.findOne({ where: { email } });

		if (userExists)
			return res
				.status(400)
				.json({ error: 'This email is already registered!' });

		const user = await User.create(req.body);

		return res.json(user);
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			oldPassword: Yup.string()
				.min(6)
				.required(),
			password: Yup.string()
				.min(6)
				.when('oldPassword', (oldPassword, field) =>
					oldPassword ? field.required() : field
				),
			confirmPasswrod: Yup.string()
				.min(6)
				.when('password', (password, field) =>
					password ? field.required().oneOf([Yup.ref('password')]) : field
				),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails' });
		}

		const { email, oldPassword } = req.body;

		const user = await User.findByPk(req.userId);

		if (email && email !== user.email) {
			const userExists = await User.findOne({ where: { email } });

			if (userExists)
				return res
					.status(400)
					.json({ error: 'This email is already registred.' });
		}

		if (oldPassword && !(await user.checkPassword(oldPassword)))
			return res.status(401).json({ error: 'Password incorrect.' });

		const { id, name, email: userEmail } = await user.update(req.body);

		return res.json({ id, name, email: userEmail });
	}
}

export default new UserController();
  