import React from 'react';
import ContactForm from './ContactForm'

function Contact =() => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default Contact
