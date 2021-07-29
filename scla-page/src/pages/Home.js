import React, { Fragment } from "react";

import "./Home.css";

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Fragment>
      <div id="jumbotron-title">
        <h1 className="text-center">SCLA Demo Day 2021</h1>
      </div>
      <Container>
        <div id="jumbotron-description">
          <Row>
            <Col>
            <h1 className="text-center">TXT FOR LIFE EVER</h1>
            </Col>
            <Col>
                <h2>August 14th, 2021 10am-1pm</h2>
            </Col>
          </Row>
          {/* <h1 className="text-center">TXT FOR LIFE EVER</h1> */}
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;
