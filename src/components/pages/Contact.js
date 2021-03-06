import React, { useState } from "react";
import "../../styles/Form.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail, checkMessage } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email,name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email || !name)) {
      setErrorMessage("Your email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!checkMessage(message)) {
      setErrorMessage("Message is required");
      return;
    }
    alert(`Hello ${name}`);

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />

        <textarea
          rows="6"
          cols="50"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        ></textarea>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
