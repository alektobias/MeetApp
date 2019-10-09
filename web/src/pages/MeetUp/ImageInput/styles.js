import styled from 'styled-components';

export const Container = styled.div`
	align-self: center;
	background: rgba(0, 0, 0, 0.4);
	margin-bottom: 10px;
	border-radius: 4px;
	label {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: rgba(255, 255, 255, 0.3);
		height: 300px;
		width: 100%;
		min-width: 940px;
		align-self: stretch;
		font-size: 20px;
		font-weight: bold;

		cursor: pointer;
		input {
			display: none;
		}
	}
`;
