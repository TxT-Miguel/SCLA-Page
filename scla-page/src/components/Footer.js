import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Instagram, Twitter, Facebook, Linkedin } from "react-bootstrap-icons";

// image
import TXT_logo from "../util/img/logo_TXT_black_lg_2014.02.05.png";

// css
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center my-auto">
            <img src={TXT_logo} alt="Urban TXT logo" width="150" />
          </Col>
          <Col className="text-center">
            <h3>Follow Us</h3>
            <div>
              <ul className="social-media">
                <li>
                  <Linkedin size={25} />
                </li>
                <li>
                  <Twitter size={25} />
                </li>
                <li>
                  <Instagram size={25} />
                </li>
                <li>
                  <Facebook size={25} />
                </li>
              </ul>
            </div>
          </Col>
          <Col className="text-center">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>Sign up</li>
              <li>Donate</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
