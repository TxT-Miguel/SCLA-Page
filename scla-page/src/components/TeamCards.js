import React from 'react';

import { Card, Row, Col, Button } from 'react-bootstrap';

const TeamCards = (props) => {
    return (
        <Card className="my-3">
            <Card.Body>
                <Row className="text-center">
                    <Col>
                        <img src={props.logo} alt="apple" width="100" />
                    </Col>
                    <Col className="my-auto">
                        {props.name}
                    </Col>
                    <Col className="my-auto">
                        <Button href={props.buttonLink}>Donate Here</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TeamCards;