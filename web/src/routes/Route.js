import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/Auth';
import DefaultLayout from '../pages/_layouts/Default';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	const { signed } = useSelector(state => state.auth);
	if (!signed && isPrivate) {
		return <Redirect to="/" />;
	}
	if (signed && !isPrivate) {
		return <Redirect to="/dashboard" />;
	}

	const Layout = signed ? DefaultLayout : AuthLayout;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}
RouteWrapper.prototype = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
		.isRequired,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
};
RouteWrapper.defaultProps = {
	isPrivate: false,
};
