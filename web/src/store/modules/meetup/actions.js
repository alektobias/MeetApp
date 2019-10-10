export function createMeetupRequest(data) {
	const { file_id, title, description, location, date } = data;
	return {
		type: '@meetup/CREATE_REQUEST',
		payload: { file_id, title, description, location, date },
	};
}
export function createMeetupSuccess() {
	return {
		type: '@meetup/CREATE_SUCCESS',
	};
}
export function createMeetupFailure() {
	return {
		type: '@meetup/CREATE_FAILURE',
	};
}
