import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="text-important">Contact Us</h2> 
      <Form > 
        <h1 className="titleName">Full Name</h1>
        <Form.Control type="text" placeholder="Please enter your name" />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <button>send</button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Contact;