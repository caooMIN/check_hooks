import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{movie.rate}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            value={movie.rate}
            edit={false}
            half={true}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
