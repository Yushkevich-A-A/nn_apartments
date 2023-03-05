import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { EmailElement } from 'shared/components/EmailElement';
import { InstagramElement } from 'shared/components/InstagramElement';
import { PhoneElement } from 'shared/components/PhoneElement';
import Logo from 'shared/Logo';
// import { Container } from 'react-bootstrap/lib/Tab';
import './style.scss';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
        <Container>
            <Row>
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <Row>Дом у реки</Row>
                    <Row>Фарфор и соловей</Row>
                </Col>
                <Col>
                    <Row>Апартаменты на Грузинской</Row>
                    <Row>Дом купца Переплетчикова</Row>
                </Col>
                <Col>
                    <Row className='footer__link_color-grey'>
                        <EmailElement />
                    </Row>
                    <Row className='footer__link_color-grey'>
                        <InstagramElement />
                    </Row>
                    <Row className='footer__link_color-grey'>
                        <PhoneElement />
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
