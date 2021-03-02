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
                        <div className="contact-tittle-box">
                            <h2>Skontaktuj się z nami</h2>
                            <div className="decoration"></div>
                        </div>
                        <div className="contact-box-form-container">
                            <div className="contact-box-form-part1">
                                <label for="name">Wpisz swoje imię</label>
                                <input
                                        id="name"
                                        type="text"
                                        className="contact-form-element"
                                        name="contact-form-name"
                                        placeholder="Krzysztof"
                                    // value={contactFormName}
                                    />
                            </div>
                            <div className="contact-box-form-part2">
                                <label for="email">Wpisz swój email</label>
                                <input
                                        id="email"
                                        type="email"
                                        className="contact-form-element"
                                        name="contact-form-email"
                                        placeholder="abc@xyz.pl"
                                    // value={contactFormEmail}
                                    />

                            </div>
                        </div>

                        <div className="contact-box-form-textarea">
                            <label for="message">Wpisz swoją wiadomość</label>
                            <textarea
                                id="message"
                                cols="10"
                                rows="6"
                                className="contact-form-element-textarea"
                                name="contact-form-name"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            // value={contactFormTxt}
                            />
                        </div>

                        <div className="contact-button-box">
                            <button className="contact-button">Wyślij</button>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Contact
