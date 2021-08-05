import React from "react";
import { Card, Button } from "react-bootstrap";

import "./SingleTeamCard.css";

const SingleTeamCard = (props) => {
  return (
    <Card className="text-center card-corners mb-5">
      <Card.Header className="header-size">{props.oneTeam.teamName}</Card.Header>
      <Card.Body>
        <img
          className="poster-img"
          src={props.oneTeam.teamPoster}
          alt={props.oneTeam.alt}
        />
        <br />
        <Button className="my-3" size="lg" variant="primary">
          Donate
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleTeamCard;
