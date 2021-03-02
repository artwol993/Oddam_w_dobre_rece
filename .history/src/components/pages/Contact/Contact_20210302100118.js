import React from 'react';
import ContactForm from './ContactForm'

function Contact =() => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <div>
            <ContactForm />
        </div>
    )
}

export default Contact
