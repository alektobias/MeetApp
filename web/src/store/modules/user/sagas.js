import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { userUpdateSuccess, userUpdateFailure, userLoading } from './actions';

export function* profileUpdate({ payload }) {
	try {
		yield put(userLoading());
		const { name, email, ...rest } = payload;

		const profile = Object.assign(
			{ name, email },
			rest.oldPassword ? rest : {}
		);

		const response = yield call(api.put, '/users', profile);

		toast.success('Perfil atualizado com sucesso');
		yield put(userUpdateSuccess(response.data));
	} catch (err) {
		console.log(err);
		toast.error('Algo deu errado, verifique seus dados!');
		yield put(userUpdateFailure());
	}
}

export default all([takeLatest('@user/PROFILE_UPDATE_REQUEST', profileUpdate)]);
