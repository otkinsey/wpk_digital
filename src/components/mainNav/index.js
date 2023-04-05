const MobileMenu = (props) => {
  return (
    <ul id="main-nav" className={`${props.active}`} style={{}}>
      <li
        onClick={(event) => {
          document.body.style.overflow =
            document.body.style.overflow === "hidden" ? "scroll" : "hidden";
          if (props.LMSActive) {
            props.toggleDemoLMS();
            setTimeout(() => {
              props.scrollTo(event.target.id);
            }, 800);
          } else {
            props.scrollTo(event.target.id);
          }
        }}
        id="nav_elearning"
      >
        elearning
      </li>
      <li
        onClick={(event) => {
          document.body.style.overflow =
            document.body.style.overflow === "hidden" ? "scroll" : "scroll";
          if (props.LMSActive) {
            props.toggleDemoLMS();
            setTimeout(() => {
              props.scrollTo(event.target.id);
            }, 800);
          } else {
            props.scrollTo(event.target.id);
          }
        }}
        id="nav_document_management"
      >
        Document Management
      </li>
      <li
        onClick={(event) => {
          document.body.style.overflow =
            document.body.style.overflow === "hidden" ? "scroll" : "hidden";
          if (props.LMSActive) {
            props.toggleDemoLMS();
            setTimeout(() => {
              props.scrollTo(event.target.id);
            }, 800);
          } else {
            props.scrollTo(event.target.id);
          }
        }}
        id="nav_digital_transformation"
      >
        Digital Transformation
      </li>
      <li
        onClick={(event) => {
          document.body.style.overflow =
            document.body.style.overflow === "hidden" ? "scroll" : "hidden";
          if (props.LMSActive) {
            props.toggleDemoLMS();
            setTimeout(() => {
              props.scrollTo(event.target.id);
            }, 800);
          } else {
            props.scrollTo(event.target.id);
          }
        }}
        id="nav_contact_us"
      >
        Connect With Us
      </li>
    </ul>
  );
};

export default MobileMenu;
