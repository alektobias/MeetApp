import React from 'react';
import { MdRotateRight } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';

export default function Spin() {
	return (
		<Rotate>
			<MdRotateRight size={22} />
		</Rotate>
	);
}
const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);

    }
    100% {
        transform: rotate(360deg);

    }
`;
const Rotate = styled.div`
	svg {
		animation: ${animation} 1.2s linear infinite;
	}
`;
