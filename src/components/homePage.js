import { BsChevronUp } from "react-icons/bs";

const HomePage = (props) => {
  const pageData = [
    {
      sectionID: "hero",
      title: "Lorem ipsum dolor ",
      text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. QuLorem ipsum doloris ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      imageURL: "images/homepage/tyler-franta-RbFDzMKTH6Q-unsplash.png",
    },
    {
      sectionID: "elearning",
      title: "elearning",
      text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. QuLorem ipsum doloris ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      imageURL: "images/homepage/elearning.png",
    },
    {
      sectionID: "document_management",
      title: "document_management",
      text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. QuLorem ipsum doloris ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      imageURL: "images/homepage/document_management.png",
    },
    {
      sectionID: "digital_transformation",
      title: "digital_transformation",
      text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. QuLorem ipsum doloris ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      imageURL: "images/homepage/digital_transformaton.png",
    },
  ];

  const createSectionContent = (section, index) => {
    const alignment = index % 2 === 0 ? "left" : "right";
    const textColor = index % 2 === 0 ? "black" : "white";
    const textPosition = index % 2 === 0 ? "10%" : "57%";
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
            <a href="/" className="btn-primary" style={{}}>
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
    </div>
  );
};

export default HomePage;
