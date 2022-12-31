const MobileMenu = (props) => {
  return (
    <ul id="main-nav" className={`${props.active}`} style={{}}>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_elearning"
      >
        elearning
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_document_management"
      >
        Document Management
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_digital_transformation"
      >
        Digital Transformation
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_contact_us"
      >
        Connect With Us
      </li>
    </ul>
  );
};

export default MobileMenu;
