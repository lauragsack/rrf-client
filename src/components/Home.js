import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BeachContainer from '../containers/BeachContainer';
import Footer from './Footer';

const Home = () => {
    return (
    <>
        <Container fluid className="homeBody">
            <Row>
            <Col md="auto">
                <BeachContainer/>
            </Col>
            <Col md="auto">
                <h3 className="homeTitle">Or we'll meet you at home</h3>
            </Col>
            <Col md="auto">
                <h3 className="homeTitle">All floatie fun, no floatie hassle!</h3>
            </Col>
            </Row>
        </Container>
    </>
    );
}

export default Home;
