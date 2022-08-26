import { FaPaperPlane } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Form, Button, Col, Row } from "react-bootstrap";

const FormMockUp = () => {
  // state variables
  const form = useRef();
  let [message, setMessage] = useState(""),
    [display, setDisplay] = useState("none"),
    [top, setTop] = useState("0px"),
    [left, setLeft] = useState("0px");
  let [formValid, setFormValid] = useState(false);
  let [width, setWidth] = useState("inherit");
  let [textAlign, setTextAlign] = useState("right");

  const validateForm = () => {
    const inputs = Array.from(
      document.getElementsByClassName("contact-form-input")
    );
    const formValues = inputs.map((i) => i.value);
    message === "" && !formValues.includes("")
      ? setFormValid(true)
      : setFormValid(false);

    // test each input for validity
    const inputsValid = inputs.map((v) => inputValid(v));
    const inputsBlank = formValues.includes("");

    inputsValid.includes(false) || inputsBlank
      ? setFormValid(false)
      : setFormValid(true);

    setWidth("100%");
    setTextAlign("center");
    setLeft("0");
    if (formValid) {
      setMessage("");
      setDisplay("none");
    }
  };

  const inputValid = (input) => {
    const textOnlyFields = ["first-name", "last-name"];
    const re = textOnlyFields.includes(input.name)
      ? /;|@|\+|=|\$|%|\*|&|#|\^|<|>|[0-9]/g
      : /;|\+|=|\$|%|\*|&|#|-|\^|<|>/g;

    textOnlyFields.includes(input.name)
      ? setMessage("Invalid input. Letters only.")
      : setMessage("Invalid input. Special characters not allowed.");

    return input.value.match(re) === null ? true : false;
  };

  /**
   * @description ensure individual fields have valid inputs when onChange event is fired
   * @param {*} event onChange event from current field
   */
  const frontEndValidate = (event) => {
    const errorMsgWidth = 330;
    const msgMargin = 5;
    const val = inputValid(event.target) ? "none" : "block";

    if (val === "block") {
      setTextAlign("right");
      setWidth("initial");
      setTop(`${event.target.offsetTop - 27}px`);
      display = setDisplay(val);

      left = setLeft(
        `${
          event.target.offsetLeft +
          event.target.clientWidth -
          errorMsgWidth -
          msgMargin
        }px`
      );
      return setFormValid(false);
    } else {
      setMessage("");
    }
  };

  const resetContactForm = (e) => {
    const formInputs = document.getElementsByClassName("contact-form-input");
    Array.from(formInputs).forEach((input) => (input.value = ""));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validateForm();
    if (formValid) {
      emailjs
        .sendForm(
          "service_grci4gd",
          "template_yrewygy",
          form.current,
          "_dJAITq5fj7zi-rp-"
        )
        .then(
          (result) => {
            console.log(`emailJs success confirmation: ${result.text}`);
            resetContactForm(e);
          },
          (error) => {
            console.log(`Email error: ${error.text}`);
          }
        );
    } else {
      setDisplay("block");
      setWidth("100%");
      setTop("53px");
      setTextAlign("center");
      setMessage("Invalid submission. Please review the form and resubmit");
    }
  };

  return (
    <Form ref={form} id="contact-form" onSubmit={sendEmail}>
      <h1>We'd love to hear from you.</h1>
      <Row>
        <Col>
          <label>First Name:</label>
          <Form.Control
            onChange={frontEndValidate}
            className="contact-form-input"
            name="first-name"
            type="text"
          />
        </Col>
        <Col>
          <label>Last Name:</label>
          <Form.Control
            onChange={frontEndValidate}
            className="contact-form-input"
            name="last-name"
            type="text"
          />
        </Col>
      </Row>
      <Row>
        <label>Company Name:</label>
        <Form.Control
          onChange={frontEndValidate}
          className="contact-form-input"
          name="company-name"
        />
      </Row>
      <Row>
        <label>Email:</label>
        <Form.Control
          className="contact-form-input"
          name="email"
          type="email"
        />
      </Row>
      <Button type="submit" className="button">
        <FaPaperPlane style={{}} /> <span>Send</span>
      </Button>
      <div
        id="error message"
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
    </Form>
  );
};

// Default Export
const ContactForm = () => (
  <div className="section" id="contact_us" style={{ color: "#6c6c6c" }}>
    <FormMockUp />
  </div>
);

export default ContactForm;
