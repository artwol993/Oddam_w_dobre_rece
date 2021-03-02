import React, { useState } from 'react';
// import ContactForm from './ContactForm';
import FormSuccess from './FormSuccess'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <div>
            {/* {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <FormSuccess />} */}
            <FormSuccess />
        </div>
    )
}

export default Contact
