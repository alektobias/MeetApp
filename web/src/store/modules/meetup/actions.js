export function meetupSelect(data) {
	const { id, title, description, location, date, file_id } = data;

	return {
		type: '@meetup/SELECT',
		payload: {
			data,
		},
	};
}
export function deleteMeetup(id) {
	return {
		type: '@meetup/DELETE',
		payload: { id },
	};
}
export function updateMeetupRequest(data) {
	const { id, title, description, location, date, file_id } = data;
	return {
		type: '@meetup/UPDATE_REQUEST',
		payload: { id, title, description, location, date, file_id },
	};
}
export function updateMeetupSuccess(data) {
	const { id, title, description, location, date, file_id } = data;

	return {
		type: '@meetup/UPDATE_SUCCESS',
		payload: { id, title, description, location, date, file_id },
	};
}
export function updateMeetupFailure() {
	return {
		type: '@meetup/UPDATE_FAILURE',
	};
}
export function loading() {
	return {
		type: '@meetup/LOADING',
	};
}
