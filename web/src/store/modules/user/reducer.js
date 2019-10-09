import produce from 'immer';

const INITIAL_STATE = {
	profile: null,
	loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		const { type, payload } = action;
		switch (type) {
			case '@auth/SIGN_IN_SUCCESS': {
				draft.profile = payload.user;
				break;
			}
			case '@user/LOADING': {
				draft.loading = true;
				break;
			}
			case '@user/PROFILE_UPDATE_SUCCESS': {
				draft.profile = payload.data;
				draft.loading = false;
				break;
			}
			case '@user/PROFILE_UPDATE_FAILURE': {
				draft.loading = false;
				break;
			}
			default:
				break;
		}
	});
}
