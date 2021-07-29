import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// images
import TXT_logo from "../util/img/logo_TXT_color_lg_2014.02.05.jpg";
import TXT_flyer from "../util/img/2021_DemoDay_Flyer 2.jpg";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="overlay-background">
        <div id="jumbotron-title">
          <h1 className="text-center">SCLA Demo Day 2021</h1>
        </div>

        <Container>
          <Row className="text-center">
            <Col className="vertical-center">
              {/* change this into a sign up button */}
              <img src={TXT_logo} alt="Urban TXT logo" width="500" />
            </Col>
            <Col>
              <img src={TXT_flyer} alt="SCLA Demo Day flyer" width="500" />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;

// {/* <Container>
// <div id="jumbotron-description">
//   <Row className="text-center">
//     <Col>
//     <img src={TXT_logo} alt="Urban TXT logo" width="350"/>
//     </Col>
//     <Col>
//         <h2>Saturday <br /> August 14th, 2021<br /> 10am-1pm</h2>
//         <Button>Sign up!</Button>
//     </Col>
//   </Row>
//   {/* <h1 className="text-center">TXT FOR LIFE EVER</h1> */}
// </div>
// </Container> */}
