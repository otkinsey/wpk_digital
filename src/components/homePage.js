import { BsChevronUp } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Form, Button, Col, Row } from "react-bootstrap";

const HomePage = (props) => {
  const pageData = [
    {
      sectionID: "hero",
      title: "Embrace the Future",
      text: "From document management applications, to digital transformatoin consultation, WPK provides solutions that drive results, and push your organization forward.",
      imageURL: "images/homepage/embrace_the_future.png",
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

  return <h1>Currently undergoing maintenance. Thank you for visiting.</h1>;
};

export default HomePage;
