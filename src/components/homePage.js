import React, { useState } from "react";

import { ModalFooter } from "react-bootstrap";
import { BsChevronUp } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

import DemoLMS from "./LMSDemo";
import ContactForm from "./contactForm";

const HomePage = (props) => {
  const pageData = [
    {
      sectionID: "hero",
      title: "Embrace the Future",
      text: "From document management applications, to digital transformatoin consultation, WPK provides solutions that drive results, and push your organization forward.",
      imageURL: "images/homepage/embrace_the_future.jpg",
    },
    {
      sectionID: "elearning",
      title: "Elearning Development",
      text: "Whether it's regulatory compliance, continuing education, or recruitment, WPK is your trusted partner. We deliver value every step of the way, from inception to implementation.",
      imageURL: "images/homepage/elearning.jpg",
      button: { text: "learn more." },
    },
    {
      sectionID: "document_management",
      title: "Document Management",
      text: "Provide access and convenience to your, clients, internal teams, and end users. Our document management solutions will enhance your brand with quality design and ease of use.",
      imageURL: "images/homepage/document_management.jpg",
    },
    {
      sectionID: "digital_transformation",
      title: "Digital Transformation",
      text: "Step, boldly into the future. Digital transformation consulting services, from WPK, will help your organization  identify opportunities, formulate strategy, and remove impediments. Deliver your products with increased speed and reduced cost, with WPK.",
      imageURL: "images/homepage/digital_transformaton.jpg",
    },
  ];

  const [LMSActive, setLMSActive] = useState(false);

  const toggleDemoLMS = () => {
    console.log(!LMSActive);
    return setLMSActive(!LMSActive);
  };

  const CreateSectionContent = (props) => {
    const alignment = props.index % 2 === 0 ? "left" : "right";

    // return (

    // );
  };

  const alignment = props.index % 2 === 0 ? "left" : "right";

  return (
    <div>
      <div id="main-content">
        <DemoLMS LMSActive={LMSActive} />
        {/* create content sections */}
        {pageData.map((section, index) => (
          <div>
            {section.sectionID === "elearning" ? (
              <DemoLMS LMSActive={LMSActive} />
            ) : (
              ""
            )}
            <div
              className="section"
              id={section.sectionID}
              style={{
                backgroundImage: `url(${section.imageURL})`,
              }}
            >
              <div className={`section_text ${alignment}`} style={{}}>
                <h1>{section.title.replace("_", " ")}</h1>
                <p>{section.text}</p>
                {section.hasOwnProperty("button") ? (
                  <button
                    className="button btn btn-primary"
                    onClick={(event) => toggleDemoLMS()}
                  >
                    {section.button.text}
                  </button>
                ) : (
                  ""
                )}
                {props.index === 0 ? (
                  <button
                    href="/"
                    className="button btn btn-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      props.scrollTo("button_contact_us");
                    }}
                  >
                    <FaPaperPlane></FaPaperPlane>Contact
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}

        {/* refactor: replace with a form component */}
        <ContactForm />
      </div>
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
          fontSize: "1rem",
          border: "1px solid #fff",
          position: "fixed",
          right: "3%",
          bottom: "6%",
          padding: "0",
          boxShadow: "0 0 10px #fff",
        }}
      >
        <BsChevronUp />
      </button>
    </div>
  );
};

export default HomePage;
