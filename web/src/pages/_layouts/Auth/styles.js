import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
	height: 100%;
	background: linear-gradient(180deg, #22202c, #402845);
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Content = styled.div`
	width: 100%;
	max-width: 315px;
	text-align: center;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			margin-bottom: 40px;
		}
		input {
			background: rgba(0, 0, 0, 0.3);
			align-self: stretch;
			height: 50px;
			padding: 15px 20px;
			margin-top: 10px;
			color: #fff;
			font-size: 18px;
			border: 0;
			border-radius: 4px;
			padding: 10px 15px;
		}
		span {
			margin-top: 5px;
			width: 100%;
			color: ${darken(0.05, '#ff0000')};
			padding: 10px;
			font-weight: bold;
			border: 1px solid ${darken(0.03, '#ff0000')};
			border-radius: 4px;
			background: ${lighten(0.2, '#ff0000')};
		}
		button {
			background: #f94d6a;
			color: #fff;
			font-weight: bold;
			align-self: stretch;
			padding: 13px;
			border: 0;
			border-radius: 4px;
			margin: 15px 0;
			font-size: 18px;
			transition: background 0.2s;
			&:hover {
				background: ${darken(0.03, '#f94d6a')};
			}
		}
		a {
			color: #fff;
			opacity: 0.8;
			font-size: 16px;
			font-weight: bold;
			margin-top: 5px;
			height: 50px;
			transition: opacity 0.2s;
			&:hover {
				opacity: 1;
			}
		}
	}
`;
