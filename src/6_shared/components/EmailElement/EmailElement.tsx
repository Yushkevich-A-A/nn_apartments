import React from 'react';
import { FooterContactLink } from '../FooterContactLink/FooterContactLink';
import { Icon } from '../Icon/Icon';
import iconEmail from './img/email.svg';

export const EmailElement: React.FC = () => {
	return (
		// TODO: импорт по абсолютному пути
		<FooterContactLink url="mailto:nn.domureki@gmail.com">
			<Icon url={iconEmail} />
			<span className="text_font-feature-setting">example@support.ru</span>
		</FooterContactLink>
	);
};
