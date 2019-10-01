import { Router } from 'express';
import multer from 'multer';

// Configs
import multerConfig from './config/multer';

// Middlewares
import authMiddleware from './app/middlewares/Auth';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';

// Validators
import meetupStoreValidator from './app/validators/MeetupStore';
import meetupUpdateValidator from './app/validators/MeetupUpdate';

const routes = new Router();

const upload = multer(multerConfig);

routes
	.route('/users')
	.post(UserController.store)
	.put(authMiddleware, UserController.update);

routes.route('/session').post(SessionController.store);

routes
	.route('/meetups')
	.all(authMiddleware)
	.get(MeetupController.index)
	.post(meetupStoreValidator, MeetupController.store)
	.put(meetupUpdateValidator, MeetupController.update)
	.delete(MeetupController.delete);

routes.route('/file').post(upload.single('file'), FileController.store);
export default routes;
