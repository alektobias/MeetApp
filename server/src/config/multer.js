import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
		filename: (req, file, cb) => {
			crypto.randomBytes(16, (err, res) => {
				if (err) return cb(err);

				return cb(null, res.toString('hex') + extname(file.originalname));
			});
		},
	}),
	limits: {
		filesize: 2 * 1024 * 1024,
	},
	fileFilter: (req, file, cb) => {
		const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('Invalid file type.'));
		}
	},
};
