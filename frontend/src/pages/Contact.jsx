import React from "react";
import ContactSection from "../component/contact/ContactSection";
import HeadingText from "../component/common/HeadingText";

const Contact = () => {
  return (
    <section className="contact">
      <HeadingText text={"CONTACT"} />
      <ContactSection />
    </section>
  );
};

export default Contact;
