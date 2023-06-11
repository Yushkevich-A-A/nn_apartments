import { PolicyConfidentiality } from 'entities/PolicyConfidentiality';
import { FooterNavMenu } from 'features/FooterNavMenu';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { EmailElement } from 'shared/components/EmailElement';
import { InstagramElement } from 'shared/components/InstagramElement';
import { PhoneElement } from 'shared/components/PhoneElement';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import Logo from 'shared/components/Logo';
// import { Container } from 'react-bootstrap/lib/Tab';
import './style.scss';

export const Footer: React.FC = () => {
	const { innerWidth: width } = window;

	return (
		<div className="footer">
			<WidthWrapperPage>
				<div className="footer__wrapper">
					<div className="footer-block footer-block__left-side footer-block_margin-top">
						<div className="footer__logo-block_custom-flex">
							<Logo />
							{width < 480 && <PhoneElement />}
						</div>
						<FooterNavMenu />
					</div>
					<div className="footer-block footer-block_margin-top">
						<Col>
							<Row className="footer__link_color-grey">
								<EmailElement />
							</Row>
							<Row className="footer__link_color-grey">
								<InstagramElement />
							</Row>
							{width >= 480 && (
								<Row className="footer__link_color-grey">
									<PhoneElement />
								</Row>
							)}
						</Col>
						<PolicyConfidentiality />
					</div>
				</div>
			</WidthWrapperPage>
		</div>
	);
};
