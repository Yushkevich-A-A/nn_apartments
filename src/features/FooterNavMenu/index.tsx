import React from 'react';
import { FooterNavLink } from 'shared/components/FooterNavLink';
import './style.scss';

export const FooterNavMenu = () => {
	return (
		<div className="footer__nav-menu">
			<div className="footer__nav-menu-col">
				<FooterNavLink value={'Дом у реки'} />
				<FooterNavLink value={'Фарфор и соловей'} />
			</div>
			<div className="footer__nav-menu-col">
				<FooterNavLink value={'Апартаменты на Грузинской'} />
				<FooterNavLink value={'Дом купца Переплетчикова'} />
			</div>
		</div>
	);
};
