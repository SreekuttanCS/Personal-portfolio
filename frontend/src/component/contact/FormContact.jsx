import React from "react";

const FormContact = () => {
  return (
    <>
      <input type="text" className="input-Contact my-3 " placeholder="Name" />
      <input type="text" className="input-Contact my-3" placeholder="Email" />  
      <textarea
        className="textarea my-3 "
        placeholder="Type your message here."
      ></textarea>
      <button className="w-100 input-Contact contact-button">Send Message</button>
    </>
  );
};

export default FormContact;
