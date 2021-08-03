import React, { useState, Fragment } from "react";

import { Card, Button, Modal } from "react-bootstrap";

import "./TeamCards.css";

const TeamCards = (props) => {
  const [currentTeam, setCurrentTeam] = useState(0);

  // const setTeam = (team) => {
  //   handleShow();
  //   setCurrentTeam(team);
  // };

  // Modal Properties
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (team) => {
    setCurrentTeam(team);
    setShowModal(true);
  };

  return (
    <Fragment>
      <Modal size="lg" show={showModal} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{currentTeam.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>IMAGE GOES HERE</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Donate</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="my-4" style={{ width: "18rem" }}>
        <Card.Header className="text-center">{props.name}</Card.Header>
        <Card.Img variant="top" src={props.logo} />
        <Card.Body className="text-center">
          <Button variant="secondary" onClick={() => handleShow(props.id)}>
            More Information
          </Button>
          <Button variant="primary" href={props.buttonLink}>
            Donate
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default TeamCards;
