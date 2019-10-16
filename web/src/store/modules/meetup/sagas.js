import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { updateMeetupFailure, updateMeetupSuccess, loading } from './actions';

export function* meetupDelete({ payload }) {
	try {
		yield call(api.delete, '/meetups', {
			params: { id: payload.id },
		});
		history.push('/dashboard');
	} catch (err) {
		toast.error('Algo deu errado, tente novamente mais tarde!');
	}
}

export function* update({ payload }) {
	try {
		yield put(loading());
		console.log(payload);
		const { id, title, description, location, date, file_id } = payload;

		const response = yield call(api.put, {
			id,
			title,
			description,
			location,
			date,
			file_id,
		});

		yield put(updateMeetupSuccess(response.data));
		history.push('/details');
	} catch (err) {
		toast.error();
		yield put(updateMeetupFailure());
	}
}
export default all([
	takeLatest('@meetup/DELETE', meetupDelete),
	takeLatest('@meetup/UPDATE_REQUEST', update),
]);
