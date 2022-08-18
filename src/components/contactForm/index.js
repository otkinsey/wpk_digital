import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

import { Form, Button, Col, Row } from "react-bootstrap";

const FormMockUp = () => {
  let [display, setDisplay] = useState("none"),
    [top, setTop] = useState("0px"),
    [left, setLeft] = useState("0px");
  const frontEndValidate = (event) => {
    //   debugger;
    const input = event.target.value;
    const re = /;|@|\+|=|\$|%|\*|&|#|-|\^/g;
    // input.match(re);

    let val = input.match(re) === null ? "none" : "block";

    display = setDisplay(val);
    // top = setTop(`${event.target.getBoundingClientRect().y + -10}px`);
    top = setTop(`${event.target.offsetTop - 30}px`);
    // left = setLeft(`${event.target.getBoundingClientRect().x + 127}px`);
    left = setLeft(`${event.target.offsetLeft + 90}px`);
    console.log("display: ", display, " | top: ", top, " | left: ", left);
  };

  return (
    <Form id="contact-form">
      <h1>We'd love to hear from you.</h1>
      <Row>
        <Col>
          <label>First Name:</label>
          <Form.Control
            onChange={frontEndValidate}
            className="contact-form-input"
          />
        </Col>
        <Col>
          <label>Last Name:</label>
          <Form.Control
            onChange={frontEndValidate}
            className="contact-form-input"
          />
        </Col>
      </Row>
      <Row>
        <label>Company Name:</label>
        <Form.Control
          onChange={frontEndValidate}
          className="contact-form-input"
        />
      </Row>
      <Row>
        <label>Email:</label>
        <Form.Control
          onChange={frontEndValidate}
          className="contact-form-input"
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
        Invalid input. Special characters not allowed.
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
