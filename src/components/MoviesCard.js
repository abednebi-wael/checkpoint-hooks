import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MoviesCard({ Movies, FilterName, Rating }) {
  return (
    <div className="movies-card">
      {Movies.filter(
        (el) =>
          el.title.toUpperCase().includes(FilterName.toUpperCase()) &&
          el.rating >= Rating
      ).map((el) => (
        <div className="movies-col">
          <img src={el.postUrl} />
          <Card
            style={{
              width: "16.2rem",
              color: "black",
              backgroundColor: "white",
              index: "-1",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h1>{el.title}</h1>
              </Card.Title>
              <Card.Text>
                <h2>{el.description}</h2>
              </Card.Text>
              <Card.Text>
                <Link to={`/Trailer/${el.id}`}>
                  <button class="button-54" role="button">Trailer</button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="title-rating">
            <Card.Text>
              <h3>{el.genre}</h3>
            </Card.Text>
            <ReactStars value={el.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesCard;
