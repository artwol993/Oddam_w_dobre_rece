import React, { useState } from 'react';
import "../../../scss/components/Contact.scss";

function Contact() {

    // const [contactFormName, setContactFormName] = useState("");
    // const [contactFormEmail, setContactFormEmail] = useState("");
    // const [contactFormTxt, setContactFormTxt] = useState("");

    // const handleNewContact = (e) => {
    //     e.preventDefault();
    //     const_errors = [];

    //     if (contactFormName.legth < 2) {
    //         _errors.push("Twoje imie jest za krótkie!");
    //     }

    //     if (contactFormEmail.legth < 2) {
    //         _errors.push("Twój email jest za krótki!");
    //     }

    //     if (contactFormTxt.legth < 2) {
    //         _errors.push("Twoja wiadomość jest za krótka");
    //     }

    //     setErrors(_errors);
    //     setSuccess(false);
    //     if (_errors.length > 0) {
    //         return false;
    //     }

    //     const message = {
    //         contactFormName: `${contactFormName}`,
    //         contactFormName: `${contactFormEmail}`,
    //         contactFormTxt: `${contactFormTxt}`
    //     }

    //     addMessage(message, onNewMessage)
    //         .then(data => {
    //             setContactFormName("");
    //             setContactFormEmail("");
    //             setContactFormTxt("");
    //         })
    // };

    return (
        <>
            <div className="contact-container" id="contact">

                <div className="contact-box contact-box1"></div>
                <div className="contact-box contact-box2">
<div className="contact-box-form">

</div>

                </div>


            </div>
        </>
    )
}

export default Contact
