import { FaPaperPlane } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "react-bootstrap";

const FormMockUp = () => {
  // state variables
  const form = useRef();
  let [message, setMessage] = useState(""),
    [display, setDisplay] = useState("none"),
    [top, setTop] = useState("0px"),
    [left, setLeft] = useState("0px");
  let isValid = false;
  let [width, setWidth] = useState("inherit");
  let [textAlign, setTextAlign] = useState("right");

  const validateForm = () => {
    // let isValid = false;
    const inputs = Array.from(
      document.getElementsByClassName("contact-form-input")
    );
    const formValues = inputs.map((i) => i.value);
    isValid = message === "" && !formValues.includes("") ? true : false;

    // test each input for validity
    const inputsValid = inputs.map((v) => inputValid(v));
    const inputsBlank = formValues.includes("");

    isValid = inputsValid.includes(false) || inputsBlank ? false : true;

    setWidth("100%");
    setTextAlign("center");
    setLeft("0");
    if (isValid) {
      setMessage("");
      setDisplay("none");
      return true;
    } else return false;
  };

  const inputValid = (input) => {
    input.style = "";
    const textOnlyFields = ["first-name", "last-name"];
    const re = textOnlyFields.includes(input.name)
      ? /;|@|\+|=|\$|%|\*|&|#|\^|<|>|[0-9]/g
      : /;|\+|=|\$|%|\*|&|#|-|\^|<|>/g;

    let value = input.value.match(re) === null ? true : false;

    value = input.value === "" ? false : true;

    if (!value && input.value === "") {
      input.style = "border: 1px solid red;";
      setMessage("Field is required. Please review and resend.");
    } else if (!value && textOnlyFields.includes(input.name)) {
      setMessage("Invalid input. Letters only.");
    } else if (!value && !textOnlyFields.includes(input.name)) {
      setMessage("Invalid input. Special characters not allowed.");
    }

    return value;
  };

  const displayMessage = () => {
    setDisplay("block");
    setWidth("100%");
    setTop("53px");
    setTextAlign("center");
  };

  /**
   * @description ensure individual fields have valid inputs when onChange event is fired
   * @param {*} event onChange event from current field
   */

  const resetContactForm = (e) => {
    const formInputs = document.getElementsByClassName("contact-form-input");
    Array.from(formInputs).forEach((input) => (input.value = ""));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validateForm();
    if (isValid) {
      emailjs
        .sendForm(
          "service_jd9247j",
          "template_aceytbb",
          form.current,
          "_dJAITq5fj7zi-rp-"
        )
        .then(
          (result) => {
            let messageContainer = document.getElementById("response");
            messageContainer.style.color = "#5fe05f";
            setMessage("Thank you. Your message has been sent.");
            displayMessage();
            resetContactForm(e);
          },
          (error) => {
            console.log(`Email error: ${error.text}`);
          }
        );
    } else {
      displayMessage();
    }
  };

  return (
    <form ref={form} id="contact-form" onSubmit={sendEmail}>
      <h1>We'd love to hear from you.</h1>
      <div className="d-flex flex-row p-2">
        <div className="col">
          <label>First Name:</label>
          <input className="contact-form-input" name="first-name" type="text" />
        </div>
        <div className="col">
          <label>Last Name:</label>
          <input className="contact-form-input " name="last-name" type="text" />
        </div>
      </div>
      <div className="d-flex flex-row p-2 align-items-center justify-content-around">
        <div className="col">
          <label>Company Name:</label>
          <input className="contact-form-input" name="company-name" />
        </div>
        <div className="col">
          <label>Email:</label>
          <input
            className="contact-form-input"
            name="user_email"
            type="email"
          />
        </div>
      </div>
      <div className="d-flex flex-row p-2 align-items-center justify-content-around">
        <div className="col">
          <label>Message:</label>
          <textarea name="message" type="text" className="contact-form-input" />
        </div>
      </div>
      <Button type="submit" className="button">
        <FaPaperPlane style={{}} /> <span>Send</span>
      </Button>
      <div
        id="response"
        style={{
          position: "absolute",
          top: top,
          left: left,
          display: display,
          color: "red",
          textAlign: textAlign,
          width: width,
        }}
      >
        {message}
      </div>
    </form>
  );
};

// Default Export
const ContactForm = () => (
  <div className="section" id="contact_us" style={{ color: "#6c6c6c" }}>
    <FormMockUp />
  </div>
);

export default ContactForm;
