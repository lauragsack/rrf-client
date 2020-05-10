import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BeachContainer from '../containers/BeachContainer';

const Home = () => {
    return (
    <>
        <Container fluid className="homeBody">
            <Row>
                <h1 id="homeTitle">Russian River Floaties</h1>
            </Row>
            <Row>
            <Col md="auto">
                <BeachContainer/>
            </Col>
            {/* <Col md="auto">
                
            </Col> */}
            </Row>
        </Container>
    </>
    );
}

export default Home;
