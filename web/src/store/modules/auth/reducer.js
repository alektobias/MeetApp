import produce from 'immer';

const INITIAL_STATE = {
	signed: false,
	token: '',
	loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_SUCCESS': {
				draft.signed = true;
				draft.token = action.payload.token;
				draft.loading = false;
				break;
			}
			case '@auth/SIGN_FAILURE': {
				draft.loading = false;
				break;
			}
			case '@auth/LOADING': {
				draft.loading = true;
				break;
			}
			case '@auth/SIGN_OUT': {
				draft.token = '';
				draft.signed = false;
				break;
			}
			default:
				break;
		}
	});
}
