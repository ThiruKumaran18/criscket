import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div>
        <Container>
          <Row>
            <Col className='headers'> Add my team </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Home;