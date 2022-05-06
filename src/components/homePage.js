const HomePage = () => {
  const pageData = [
    {
      sectionID: "jumbotron",
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
    console.log("section id: ", section.sectionID, index);
    const alignment = index % 2 === 0 ? "left" : "right";
    const textColor = index % 2 === 0 ? "black" : "white";
    const textPosition = index % 2 === 0 ? "3%" : "67%";
    return (
      <div
        className="section"
        id={section.sectionID}
        style={{ background: `center/cover url(${section.imageURL})` }}
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
              style={{
                display: "block",
                backgroundColor: "orange",
                zIndex: "1",
                position: "relative",
                color: "white",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "15px 20px",
                width: "120px",
                textDecoration: "none",
                borderRadius: "8px",
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
    </div>
  );
};

export default HomePage;
