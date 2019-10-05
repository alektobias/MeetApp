import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Logo from '~/assets/images/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
	const dispatch = useDispatch();

	function handleSubmit(data) {
		dispatch(signInRequest(data));
	}

	return (
		<Form onSubmit={handleSubmit}>
			<img src={Logo} alt="Logo MeetApp" />
			<Input placeholder="Digite seu e-mail" name="email" type="text" />
			<Input placeholder="Sua senha secreta" name="password" type="password" />
			<button type="submit">Entrar</button>
			<Link to="/register">Criar conta grátis</Link>
		</Form>
	);
}
