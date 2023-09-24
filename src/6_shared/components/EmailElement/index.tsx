import React from 'react';
import { FooterContactLink } from '../FooterContactLink';
import { Icon } from '../Icon';
import iconEmail from './img/email.svg';
import './style.scss';

export const EmailElement: React.FC = () => {
	return (
		<FooterContactLink url="mailto:example@support.ru">
			<Icon url={iconEmail} />
			<span className="text_font-feature-setting">example@support.ru</span>
		</FooterContactLink>
	);
};
