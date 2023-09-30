import React from 'react';
import { FooterContactLink } from '../FooterContactLink/FooterContactLink';
import iconInstagram from './img/instagram.svg';
import { Icon } from '../Icon/Icon';

export const InstagramElement: React.FC = () => {
	return (
		<FooterContactLink url="https://www.instagram.com/nn_domureki/">
			<Icon url={iconInstagram} />
			<span className="text_font-feature-setting">instagram</span>
		</FooterContactLink>
	);
};
