import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
	min-height: 100vh;
	height: 100%;
	background: linear-gradient(180deg, #22202c, #402845);
`;
export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	form {
		margin: 50px auto 0;
		max-width: 940px;
		width: 100%;
		display: flex;
		flex-direction: column;
		hr {
			margin: 20px 0;
			background: rgba(255, 255, 255, 0.1);
			height: 1px;
			border: 0;
		}
		input {
			align-self: stretch;
			height: 50px;
			padding-left: 20px;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			font-size: 18px;
			border: 0;
			border-radius: 4px;
			margin-bottom: 10px;
		}

		textarea {
			height: 200px;
			font-family: inherit;
			padding: 20px;
			background: rgba(0, 0, 0, 0.2);
			color: #fff;
			font-size: 18px;
			border: 0;
			border-radius: 4px;
			margin-bottom: 10px;
			resize: none;
		}
		span {
			margin-top: 5px;
			width: 100%;

			padding: 10px;
			font-weight: bold;
			color: ${darken(0.05, '#ff0000')};
			border: 1px solid ${darken(0.03, '#ff0000')};
			border-radius: 4px;
			background: ${lighten(0.2, '#ff0000')};
		}
	}
	button {
		background: #f94d6a;
		color: #fff;
		font-weight: bold;
		align-self: flex-end;
		display: inline-flex;
		align-items: center;
		padding: 13px 20px;
		border: 0;
		border-radius: 4px;
		margin: 15px 0;
		font-size: 16px;
		&:hover {
			background: ${darken(0.03, '#f94d6a')};
		}
		svg {
			margin-right: 17px;
		}
	}
	h2 {
		font-size: 32px;
		color: #fff;
		font-weight: bold;
	}
`;
