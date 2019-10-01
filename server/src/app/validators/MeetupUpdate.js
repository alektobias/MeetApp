import * as Yup from 'yup';

export default async (req, res, next) => {
	try {
		const schema = Yup.object().shape({
			title: Yup.string(),
			description: Yup.string(),
			location: Yup.string(),
			date: Yup.string(),
			name: Yup.date(),
			file_id: Yup.number(),
			user_id: Yup.number(),
		});

		await schema.validate(req.body, { abortEarly: false });

		return next();
	} catch (error) {
		return res
			.status(400)
			.json({ error: 'Validation fails', messages: error.inner });
	}
};
