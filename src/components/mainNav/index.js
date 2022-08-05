const MobileMenu = (props) => {
  return (
    <ul id="main-nav" className={`${props.active}`} style={{}}>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_elearning"
      >
        ELEARNING
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_document_management"
      >
        DOCUMENT MANAGEMENT
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_digital_transformation"
      >
        DIGITAL TRANSFORMATION
      </li>
      <li
        onClick={(event) => {
          props.scrollTo(event.target.id);
        }}
        id="nav_contact_us"
      >
        CONNECT WITH US
      </li>
    </ul>
  );
};

export default MobileMenu;
