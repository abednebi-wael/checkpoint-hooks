import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Add({ movies, setMovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [url, setUrl] = useState("");

  return (
    <>
      
      <Button className="button-56" role="button" variant="primary" onClick={handleShow}>
        You Want To Add Something{" "}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="btn-mod">Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Rating"
                onChange={(e) => setRating(e.target.value)}
              />
              <Form.Label>PostUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn-sav" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
