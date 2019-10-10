import produce from 'immer';

const INITIAL_STATE = {
    
};

export default function auth(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@meetup/CREATE_SUCCESS': {
				break;
			}
			case '@meetup/CREATE_FAILURE': {
				break;
			}
			default:
				break;
		}
	});
}
