import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetUp from '~/pages/MeetUp';

export default function routes() {
	return (
		<Switch>
			<Route path="/" exact component={SignIn} />
			<Route path="/register" exact component={SignUp} />

			<Route path="/dashboard" component={Dashboard} isPrivate />
			<Route path="/profile" component={Profile} isPrivate />
			<Route path="/meetup/new" component={MeetUp} isPrivate />
		</Switch>
	);
}
