import styled from 'styled-components';

export const Container = styled.div`
	max-width: 940px;
	width: 100%;
	margin: 40px;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
	}
`;

export const Meetup = styled.main`
	background: rgba(0, 0, 0, 0.1);
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	color: #fff;
	strong {
		font-size: 18px;
	}
	section {
		display: flex;
		align-items: center;
		span {
			color: rgba(255, 255, 255, 0.6);
			font-size: 16px;
			margin-right: 30px;
		}
		svg {
			cursor: pointer;
		}
	}
`;
