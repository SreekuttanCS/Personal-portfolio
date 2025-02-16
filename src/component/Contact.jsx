import React from "react";
import { Col, Row } from "react-bootstrap";
import { SocialMedia } from "./contact/SocialMedia";
import FormContact from "./contact/FormContact";

function Contact() {
  return (
    <div className="contact comp-content">
      <h2 className="heading">CONTACT</h2>
      <p>I'm currently specializing in Back-end Development. </p>
      <p>Feel free to get in touch and talk more about your projects.</p>
      <Row className="contact-section">
        <Col md={6} >
          <SocialMedia />
        </Col>
        <Col md={6}>
          <FormContact />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
