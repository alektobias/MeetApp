import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

export default function Profile() {
	return (
		<form>
			<input placeholder="Nome completo" />
			<input placeholder="Seu e-mail" />
			<hr />
			<input placeholder="Senha atual" type="password" />
			<input placeholder="Nova senha" type="password" />
			<input placeholder="Confirmação de senha" type="password" />
			<button type="submit">
				<MdAddCircleOutline color="#fff" size="20" />
				Salvar Perfil
			</button>
		</form>
	);
}
