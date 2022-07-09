import React, { useState } from 'react';
import ContactForm from './contactForm';
import FormSuccess from './formSuccess'
import "../../../../scss/components/contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-theme"></div>
        {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  )
}

export default Contact
