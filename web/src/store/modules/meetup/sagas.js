import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';



export default all([
	takeLatest('@meetup/CREATE_REQUEST', signUp),
]);
