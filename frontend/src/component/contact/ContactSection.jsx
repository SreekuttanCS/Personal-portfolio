import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { SocialMedia } from "./SocialMedia";
import FormContact from "./FormContact";

const ContactSection = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        I'm currently specializing in Back-end Development.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Feel free to get in touch and talk more about your projects.
      </motion.p>

      <Row className="contact-section">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <SocialMedia />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <FormContact />
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default ContactSection;
