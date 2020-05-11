import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BeachContainer from '../containers/BeachContainer';

const Home = () => {
    return (
    <Container fluid className="homeBody">
        <Row>
            <Col md-auto>
                <div>
                    <h1 id="homeTitle">Russian River Floaties</h1>
                    <p id="welcome">Welcome to Russian River Floaties! Float your favorite river without the floatie hassle. 
                    <br/>Meet us at the beach or we'll meet you at home. Check out the beaches we serve below!</p>
                </div>
                <BeachContainer/>
            </Col>
        </Row>
    </Container>
    );
}

export default Home;
