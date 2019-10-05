import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '~/assets/images/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';
import Spin from '~/components/Spin';

export default function SignUp() {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.auth);
	const schema = Yup.object().shape({
		name: Yup.string().required(),
		email: Yup.string()
			.email()
			.required(),
		password: Yup.string()
			.min(6)
			.required(),
	});

	function handleSubmit(data) {
		dispatch(signUpRequest(data));
	}
	return (
		<Form onSubmit={handleSubmit} schema={schema}>
			<img src={Logo} alt="Logo MeetApp" />
			<Input placeholder="Nome Completo" name="name" type="text" />
			<Input placeholder="Digite seu e-mail" name="email" type="text" />
			<Input placeholder="Sua senha secreta" name="password" type="password" />
			<button type="submit">{loading ? <Spin /> : 'Criar conta'}</button>
			<Link to="/">Já tenho login</Link>
		</Form>
	);
}
