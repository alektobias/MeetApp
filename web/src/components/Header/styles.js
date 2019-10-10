import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
	background: #000;
	height: 90px;
	padding: 30px 0;
`;
export const Content = styled.header`
	max-width: 940px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	img {
		height: 30px;
		width: 30px;
	}
	aside {
		display: flex;
		align-items: center;
	}
`;
export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-right: 30px;
	span {
		text-transform: capitalize;
		color: #fff;
		font-size: 14px;
		font-weight: bold;
	}
	a {
		color: #999999;
	}
`;

export const Logout = styled.button`
	background: #f94d6a;
	font-weight: bold;
	font-size: 16px;
	color: #fff;
	border: 0;
	border-radius: 4px;
	height: 40px;
	width: 70px;
	&:hover {
		background: ${darken(0.03, '#f94d6a')};
	}
`;
