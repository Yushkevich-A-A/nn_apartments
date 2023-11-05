import React, { FC } from 'react';
import { CloseButton } from 'react-bootstrap';
import styled from 'styled-components';

type PropsType = {
	cb: () => void;
};

const Container = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
`;

export const CloseBTN: FC<PropsType> = ({ cb }) => {
	return (
		<Container>
			<CloseButton onClick={cb} />
		</Container>
	);
};
