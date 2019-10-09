export function userUpdateRequest(payload) {
	const { name, email, ...rest } = payload;
	return {
		type: '@user/PROFILE_UPDATE_REQUEST',
		payload: {
			name,
			email,
			...rest,
		},
	};
}
export function userUpdateSuccess(data) {
	return {
		type: '@user/PROFILE_UPDATE_SUCCESS',
		payload: { data },
	};
}
export function userUpdateFailure() {
	return {
		type: '@user/PROFILE_UPDATE_FAILURE',
	};
}
export function userLoading() {
	return {
		type: '@user/LOADING',
	};
}
