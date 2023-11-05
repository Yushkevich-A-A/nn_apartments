import React, { FC } from 'react';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';
import styled from 'styled-components';

type PropsType = {
	type: 'plus' | 'minus';
	disable: boolean;
	cb: () => void;
};

type StyleProps = {
	img: string;
	disable: boolean;
};

const Control = styled.div<StyleProps>`
	width: 45px;
	height: 45px;
	border: 1px solid #90856b;
	border-radius: 50%;
	background-repeat: no-repeat;
	// background-size: contain;
	background-position: center;
	${({ disable }): string | false => disable && 'opacity: 50%'};
	background-image: url(${({ img }): string => img});
`;

export const ButtonCalc: FC<PropsType> = ({ type, disable, cb }) => {
	return <Control onClick={cb} disable={disable} img={type === 'plus' ? plus : minus} />;
};
