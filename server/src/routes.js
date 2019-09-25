import { Router } from 'express';
// Middlewares
import isAuth from './app/middlewares/isAuth';
// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.route('/users').post(UserController.store);
routes.route('/session').post(SessionController.store);

routes.route('/test').get(isAuth, (req, res) => res.json({ id: req.userId }));

export default routes;
