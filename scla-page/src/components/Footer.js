import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Instagram, Twitter, Facebook, Linkedin } from "react-bootstrap-icons";

// image
import TXT_logo from "../util/img/logo_TXT_color_sm_2014.02.05.jpg";

// css
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center my-auto">
            <img className="footer-logo" src={TXT_logo} alt="Urban TXT logo" />
          </Col>

          {/* Social Media column */}
          <Col className="text-center">
            <h3>Follow Us</h3>
            <div>
              <ul className="social-media">
                <li>
                  <a
                    href="https://www.linkedin.com/company/teens-exploring-technology/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/urbantxt?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter size={25} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/urbantxt/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram
                      size={25}
                      href="https://www.instagram.com/urbantxt/?hl=en"
                      target="_blank"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/UrbanTeenseXploringTechnology/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col className="text-center">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                <a
                  href="https://www.eventbrite.com/e/txt-presents-demo-day-2021-tickets-164046376127"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign up
                </a>
              </li>
              <li>
                <a
                  href="https://www.classy.org/campaign/urban-txt-teens-exploring-technology/c266418"
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="https://exploringtech.org/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  TXT
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
