import React, { useState, Fragment } from "react";

import { Card, Button, Modal } from "react-bootstrap";

import "./TeamCards.css";
import TEAM_INFO from "../util/TEAM_INFO";

const TeamCards = (props) => {
  const [currentTeam, setCurrentTeam] = useState(0);

  // Modal Properties
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (chooseTeam) => {
    const filterTeam = TEAM_INFO.filter((i) => i.id === chooseTeam)[0];
    setCurrentTeam(filterTeam);
    setShowModal(true);
  };

  return (
    <Fragment>
      {/* Modal for individual teams */}
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header>
          <Modal.Title>{currentTeam.teamName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-modal" src={currentTeam.teamPoster} alt={currentTeam.alt} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Donate</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="my-4" style={{ width: "18rem" }} key={props.team.id}>
        <Card.Header className="text-center">{props.team.teamName}</Card.Header>
        <Card.Img variant="top" src={props.team.teamLogo} />
        <Card.Body className="text-center">
          <Button variant="secondary" onClick={() => handleShow(props.team.id)}>
            More Information
          </Button>
          <Button variant="primary" href={props.team.teamDonateLink}>
            Donate
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default TeamCards;
