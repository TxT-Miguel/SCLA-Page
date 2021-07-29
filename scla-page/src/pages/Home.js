import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// images
import TXT_flyer from "../util/img/2021_DemoDay_Flyer 2.jpg";

// components
import TeamCards from "../components/TeamCards";
import Footer from '../components/Footer';

// css
import "./Home.css";
import TEAM_INFO from "../util/TEAM_INFO";

const Home = () => {
  return (
    <Fragment>
      <div className="overlay-background">
        <div id="jumbotron-title">
          <h1 className="text-center">SCLA Demo Day 2021</h1>
        </div>

        <Container>
          <Row className="text-center">
            <Col>
              <img src={TXT_flyer} alt="SCLA Demo Day flyer" width="500" />
            </Col>
            <Col className="my-auto">
              <Button className="mb-5">Sign up Here!</Button>
              <br />
              <Button>Donate Here!</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <section>
        <Container>
          <h2 className="text-center my-5">Meet the Teams!</h2>
          {TEAM_INFO.map((i) => (
            <Row>
              <TeamCards
                id={i.id}
                logo={i.teamLogo}
                name={i.teamName}
                buttonLink={i.teamDonateLink}
              />
            </Row>
          ))}
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
