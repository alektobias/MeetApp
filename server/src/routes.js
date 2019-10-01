import { Router } from 'express';
import multer from 'multer';

// Configs
import multerConfig from './config/multer';

// Middlewares
import authMiddleware from './app/middlewares/Auth';

// Validators
import meetupStoreValidator from './app/validators/MeetupStore';
import meetupUpdateValidator from './app/validators/MeetupUpdate';
import userStoreValidator from './app/validators/UserStore';
import userUpdateValidator from './app/validators/UserUpdate';
// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptionController from './app/controllers/SubscriptionController';
import OrganizingController from './app/controllers/OrganizingController';

const routes = new Router();

const upload = multer(multerConfig);

routes
	.route('/users')
	.post(userStoreValidator, UserController.store)
	.put(authMiddleware, userUpdateValidator, UserController.update);

routes.route('/session').post(SessionController.store);

routes
	.route('/meetups')
	.all(authMiddleware)
	.get(MeetupController.index)
	.post(meetupStoreValidator, MeetupController.store)
	.put(meetupUpdateValidator, MeetupController.update)
	.delete(MeetupController.delete);

routes
	.route('/subscriptions')
	.all(authMiddleware)
	.get(SubscriptionController.index);

routes
	.route('/meetups/:meetupId/subscriptions')
	.post(authMiddleware, SubscriptionController.store);

routes.route('/organizing').get(authMiddleware, OrganizingController.index);

routes
	.route('/file')
	.post(authMiddleware, upload.single('file'), FileController.store);
export default routes;
