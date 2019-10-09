import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { userUpdateRequest } from '~/store/modules/user/actions';
import Spin from '~/components/Spin';

export default function Profile() {
	const dispatch = useDispatch();
	const { profile, loading } = useSelector(state => state.user);

	function handleSubmit(data) {
		dispatch(userUpdateRequest(data));
	}

	return (
		<Form initialData={profile} onSubmit={handleSubmit}>
			<Input placeholder="Nome completo" name="name" />
			<Input placeholder="Seu e-mail" name="email" />
			<hr />
			<Input placeholder="Senha atual" type="password" name="oldPassword" />
			<Input placeholder="Nova senha" type="password" name="password" />
			<Input
				placeholder="Confirmação de senha"
				type="password"
				name="confirmPassword"
			/>
			<button type="submit">
				{loading ? (
					<Spin />
				) : (
					<>
						<MdAddCircleOutline color="#fff" size="20" />
						Salvar Perfil
					</>
				)}
			</button>
		</Form>
	);
}
