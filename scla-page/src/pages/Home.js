import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

// images
import TXT_flyer from "../util/img/txt/2021_DemoDay_Flyer 2.jpg";
import YOUTUBE_logo from "../util/img/streaming/youtube-logo.jpg";
import LINKEDIN_logo from "../util/img/streaming/linkedin.png";
import CLASSY_logo from "../util/img/misc/classy-logo.png";
import EVENTBRITE_logo from "../util/img/misc/eventbrite-logo.png";

// components
import Footer from "../components/Footer";

// css
import "./Home.css";
import TEAM_INFO from "../util/TEAM_INFO";
import SingleTeamCard from "../components/SingleTeamCard";

const Home = () => {
  // use values 0-8 as indexes for each team. anything above it will not generate
  let { id } = useParams();

  return (
    <Fragment>
      <div className="overlay-background">
        <div id="jumbotron-title">
          <h1 className="text-center">SCLA Demo Day 2021</h1>
        </div>

        <Container>
          <Row className="text-center my-3">
            <Col md={5}>
              <img
                className="header-flyer-image"
                src={TXT_flyer}
                alt="SCLA Demo Day flyer"
              />
            </Col>
            <Col
              md={{ span: 5, offset: 2 }}
              className="d-flex flex-column my-3"
            >
              <Card className="my-auto">
                <Card.Body>
                  <Card.Title>Where</Card.Title>
                  <Card.Text>
                    <img
                      className="header-stream-images"
                      src={YOUTUBE_logo}
                      alt="youtube"
                    />
                    <img
                      className="header-stream-images"
                      src={LINKEDIN_logo}
                      alt="Linkedin"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Row>
                <Col md={6}>
                  <Card>
                    <Card.Title>Sign up here!</Card.Title>
                    <Card.Text>
                      <a
                        href="https://www.eventbrite.com/e/txt-presents-demo-day-2021-tickets-164046376127"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="header-link-images"
                          src={EVENTBRITE_logo}
                          alt="event-brite sign up"
                        />
                      </a>
                    </Card.Text>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Title>Donate Here!</Card.Title>
                    <Card.Text>
                      <a
                        href="https://www.classy.org/campaign/scla-demo-day-2021/c348783"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="header-link-images"
                          src={CLASSY_logo}
                          alt="donation page"
                        />
                      </a>
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <section>
        <Container>
          {id < 9 || Number.isNaN(id) ? (
            <h2 className="text-center py-5">Team Highlight</h2>
          ) : (
            ""
          )}
          <Row>
            {id < 9 || Number.isNaN(id) ? (
              <SingleTeamCard oneTeam={TEAM_INFO[id]} />
            ) : (
              <h1 className="text-center">Team not found</h1>
            )}
          </Row>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
