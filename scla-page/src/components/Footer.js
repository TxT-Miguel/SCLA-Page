import React from "react";
import { Row, Col, Container } from "react-bootstrap";

// image
import TXT_logo from "../util/img/logo_TXT_color_lg_2014.02.05.jpg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <Col>
            <img src={TXT_logo} alt="Urban TXT logo" width="100" />
          </Col>
          <Col>
            <h3>Follow Us</h3>
            <ul>
                <li>LinekdIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <ul>
                <li>sign up</li>
                <li>Donate</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
