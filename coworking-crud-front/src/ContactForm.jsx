import { useState } from "react";

function ContactForm() {

    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    
    const handleSubmitContact = (event) => {
        event.preventDefault();
    
        setContactData({
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            message: event.target.message.value,
        });

        event.target.reset()
    };
    
    return (
        <section className="contact-section">
            <h3>Nous contacter</h3>
            <form action="" className="contact-form" onSubmit={handleSubmitContact}>
                <div className="form-element">
                    <label for="name">LastName</label>
                    <input type="text" name="lastName" id="LastName" required />
                </div>
                <div className="form-element">
                    <label for="name">FirstName</label>
                    <input type="text" name="firstName" id="FirstName" required />
                </div>
                <div className="form-element">
                    <label for="message">Message</label>
                    <textarea type="text" name="message" id="message" required />
                </div>
                <div className="form-element">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className=" form-element submit-btn">
                    <input className="btn" type="submit" name="submit" id="submit" value="Send" required />
                </div>
            </form>

            {
                contactData.email !== "" && (
                    <div className="submit-msg-container">
                        <p>Merci de nous avoir contacté</p>
                        <p className="userName">{contactData.firstName} {contactData.lastName}</p>
                    </div>
                )
            }
        </section>
    );
};

export default ContactForm