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

  const frontEndValidate = (event) => {
    const input = event.target.value;
    const textOnlyFields = ["first-name", "last-name"];
    const errorMsgWidth = 330;
    const msgMargin = 5;
    const re = textOnlyFields.includes(event.target.name)
      ? /;|@|\+|=|\$|%|\*|&|#|\^|<|>|[0-9]/g
      : /;|\+|=|\$|%|\*|&|#|-|\^|<|>/g;

    let val = input.match(re) === null ? "none" : "block";

    textOnlyFields.includes(event.target.name)
      ? setMessage("Invalid input. Letters only.")
      : setMessage("Invalid input. Special characters not allowed.");

    display = setDisplay(val);
    top = setTop(`${event.target.offsetTop - 27}px`);
    left = setLeft(
      `${
        event.target.offsetLeft +
        event.target.clientWidth -
        errorMsgWidth -
        msgMargin
      }px`
    );
  };

  const resetContactForm = (e) => {
    const formInputs = document.getElementsByClassName("contact-form-input");
    Array.from(formInputs).forEach((input) => (input.value = ""));
  };

  const sendEmail = (e) => {
    e.preventDefault();
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
          //   onChange={frontEndValidate}
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
          textAlign: "right",
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
