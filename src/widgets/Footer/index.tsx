import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
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
                    <Row>
                        <PhoneElement />
                    </Row>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
