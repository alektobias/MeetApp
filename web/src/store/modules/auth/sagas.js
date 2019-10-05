import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signFailure, loading, signInSuccess } from './actions';

export function* signUp({ payload }) {
	try {
		yield put(loading());
		const { name, email, password } = payload;
		yield call(api.post, '/users', { name, email, password });
		toast.success('Sua conta foi criada com sucesso!');
		setTimeout(() => history.push('/'), 2000);
	} catch (err) {
		toast.error('Falha no cadastro, verifique seus dados!');
		yield put(signFailure());
	}
}

export function* signIn({ payload }) {
	try {
		const { email, password } = payload;
		const { data } = yield call(api.post, '/session', {
			email,
			password,
		});
		const { user, token } = data;
		console.log(data);
		api.defaults.headers.Authorization = `Bearer ${token}`;

		yield put(signInSuccess({ user, token }));
		history.push('/dashboard');
	} catch (err) {
		toast.error('Falha no login verifique seus dados');
	}
}

export default all([
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
