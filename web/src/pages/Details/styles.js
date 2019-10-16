import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 50px;
	max-width: 940px;
	width: 100%;
`;
export const Title = styled.div`
	display: flex;
	color: #fff;
	align-items: center;
	justify-content: space-between;
	h3 {
		font-size: 32px;
		font-weight: bold;
	}
	button#edit {
		background: #4dbaf9;
	}
	button + button {
		margin-left: 15px;
	}
`;
export const Content = styled.div`
	color: #fff;
	font-size: 18px;
	margin-top: 50px;
	img {
		height: 300px;
	}
	p {
		margin: 25px 0 30px 0;
	}
	div {
		display: flex;
		align-items: center;
		opacity: 0.6;
		span {
			font-size: 16px;
			margin-right: 30px;
			display: flex;
			align-items: center;
			svg {
				margin-right: 17px;
			}
		}
	}
`;
export const Image = styled.div`
	width: 100%;
	height: 300px;
	background: ${props => (props.url ? `url(${props.url})` : 'rgba(0,0,0,0.3)')};
	background-repeat: no-repeat;
	background-position: center center;
	border-radius: 4px;
`;
