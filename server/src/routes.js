import { Router } from 'express';
import multer from 'multer';

// Configs
import multerConfig from './config/multer';

// Middlewares
import isAuth from './app/middlewares/isAuth';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();

const upload = multer(multerConfig);

routes.route('/users').post(UserController.store);
routes.route('/session').post(SessionController.store);

routes.route('/file').post(upload.single('file'), FileController.store);

routes.route('/test').get(isAuth, (req, res) => res.json({ id: req.userId }));

export default routes;
