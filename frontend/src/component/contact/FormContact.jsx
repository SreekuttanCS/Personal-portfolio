import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bounce, ToastContainer, toast } from "react-toastify";

const FormContact = () => {
  const [status, setStatus] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzjynpw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message Sent!");
      form.reset();
      toast.success("Message Sent!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setStatus("Oops! Something went wrong.");
      toast.error("Oops! Something went wrong.", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.input
        type="text"
        name="name"
        className="input-Contact my-3"
        placeholder="Name"
        required
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      />
      <motion.input
        type="email"
        name="email"
        className="input-Contact my-3"
        placeholder="Email"
        required
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      />
      <motion.textarea
        name="message"
        className="textarea my-3"
        placeholder="Type your message here."
        required
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      ></motion.textarea>
      <motion.button
        type="submit"
        className="w-100 input-Contact contact-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      >
        {status}
      </motion.button>
      <ToastContainer />
    </form>
  );
};

export default FormContact;
