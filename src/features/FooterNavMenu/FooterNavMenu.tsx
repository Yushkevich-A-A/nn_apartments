import React from 'react';
import { FooterNavLink } from '6_shared/components/FooterNavLink';
import './style.scss';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;

	@media (max-width: 640px) {
		.footer__nav-menu {
			flex-direction: column;
		}
	}
`;

const Column = styled.div`
	margin-right: 35px;

	@media (max-width: 980px) {
		&:first-child {
			margin-right: 15px;
		}
	}

	@media (max-width: 640px) {
		&:first-child {
			margin-right: 0;
		}
	}
`;

export const FooterNavMenu = () => {
	return (
		<Container>
			<Column>
				<FooterNavLink value={'Дом у реки'} />
				<FooterNavLink value={'Фарфор и соловей'} />
			</Column>
			<Column>
				<FooterNavLink value={'Апартаменты на Грузинской'} />
				<FooterNavLink value={'Дом купца Переплетчикова'} />
			</Column>
		</Container>
	);
};
