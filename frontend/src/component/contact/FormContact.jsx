import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const FormContact = () => {
  return (
    <>
      <motion.input
        type="text"
        className="input-Contact my-3"
        placeholder="Name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      />
      <motion.input
        type="text"
        className="input-Contact my-3"
        placeholder="Email"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      />
      <motion.textarea
        className="textarea my-3"
        placeholder="Type your message here."
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      ></motion.textarea>
      <motion.button
        className="w-100 input-Contact contact-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      >
        Send Message
      </motion.button>
    </>
  );
};

export default FormContact;
