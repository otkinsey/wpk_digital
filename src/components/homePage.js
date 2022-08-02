import { BsChevronUp } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Form, Button, Col, Row } from "react-bootstrap";

const HomePage = (props) => {
  const pageData = [
    {
      sectionID: "hero",
      title: "Embrace the Future",
      text: "From document management applications, to digital transformatoin consultation, WPK provides solutions that drive results, and push your organization forward.",
      imageURL: "images/homepage/tyler-franta-RbFDzMKTH6Q-unsplash.png",
    },
    {
      sectionID: "learning",
      title: "Elearning Development",
      text: "Whether it's regulatory compliance, continuing education, or recruitment, WPK is your trusted partner. We deliver value every step of the way, from inception to implementation.",
      imageURL: "images/homepage/elearning.png",
    },
    {
      sectionID: "document_management",
      title: "Document Management",
      text: "Provide access and convenience to your, clients, internal teams, and end users. Our document management solutions will enhance your brand with quality design and ease of use.",
      imageURL: "images/homepage/document_management.png",
    },
    {
      sectionID: "digital_transformation",
      title: "Digital transformation",
      text: "Step, boldly into the future. Digital transformation consulting services, from WPK, will help your organization  identify opportunities, formulate strategy, and remove impediments. Deliver your products with increased speed and reduced cost, with WPK.",
      imageURL: "images/homepage/digital_transformaton.png",
    },
  ];

  const createSectionContent = (section, index) => {
    const alignment = index % 2 === 0 ? "left" : "right";
    const textColor = index % 2 === 0 ? "#6c6c6c" : "white";
    const textPosition = index % 2 === 0 ? "7%" : "71%";
    return (
      <div
        className="section"
        id={section.sectionID}
        style={{
          background: `center/100% no-repeat url(${section.imageURL})`,
        }}
      >
        <div
          className="section_text"
          style={{ textAlign: alignment, left: textPosition, color: textColor }}
        >
          <h1>{section.title.replace("_", " ")}</h1>
          <p>{section.text}</p>
          {index === 0 ? (
            <a
              href="/"
              className="btn-primary"
              onClick={(event) => {
                event.preventDefault();
                props.scrollTo("button_contact_us");
              }}
            >
              Contact Us
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {pageData.map((section, index) => createSectionContent(section, index))}
      <button
        onClick={(event) => {
          event.preventDefault();
          props.scrollTo(event.target.id);
        }}
        id="button_header"
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: "rgba(0,0,0,.45)",
          color: "white",
          fontSize: "2rem",
          border: "1px solid #fff",
          position: "fixed",
          right: "3%",
          bottom: "6%",
          boxShadow: "0 0 10px #fff",
        }}
      >
        <BsChevronUp />
      </button>
      <div className="section" id="contact_us" style={{ color: "#6c6c6c" }}>
        <Form>
          <h1>We'd love to hear from you.</h1>
          <Row>
            <Col>
              <label>First Name:</label>
              <Form.Control />
            </Col>
            <Col>
              <label>First Name:</label>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <label>Company Name:</label>
            <Form.Control></Form.Control>
          </Row>
          <Row>
            <label>Email:</label>
            <Form.Control></Form.Control>
          </Row>
          <Button type="submit" className="button">
            <FaPaperPlane style={{}} /> <span>Send</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;

// 617-730-2069
