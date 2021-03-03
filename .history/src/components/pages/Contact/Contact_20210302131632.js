import React, { useState } from 'react';
import ContactForm from './ContactForm';
import FormSuccess from './FormSuccess'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <>
            <div>
                <div className="contact-container" id="contact">

                    <div className="contact-box contact-box1"></div>
                    {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />}
                </div>
<
        </>
    )
}

export default Contact
