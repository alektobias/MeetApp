import produce from 'immer';

const INITIAL_STATE = {
	loading: false,
	selected: {},
};

export default function meetup(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	return produce(state, draft => {
		switch (type) {
			case '@meetup/SELECT': {
				draft.selected = payload.data;
				break;
			}
			case '@meetup/UPDATE_SUCCESS': {
				draft.selected = payload.data;
				draft.loading = false;
				break;
			}
			case '@meetup/UPDATE_FAILURE': {
				draft.loading = false;
				break;
			}
			case '@meetup/LOADING': {
				draft.loading = true;
				break;
			}
			default:
				break;
		}
	});
}
