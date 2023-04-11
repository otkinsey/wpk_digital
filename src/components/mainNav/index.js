const MobileMenu = (props) => {
  const navItems = [
    { name: "elearning", id: "nav_elearning" },
    { name: "document management", id: "nav_document_management" },
    { name: "digital transformation", id: "nav_digital_transformation" },
    { name: "contact with us", id: "nav_contact_with_us" },
  ];
  return (
    <ul id="main-nav" className={`${props.active}`} style={{}}>
      {navItems.map((item, index) => (
        <li
          key={`nav-item-${index}`}
          onClick={(event) => {
            document.body.style.overflow = "scroll";
            if (props.LMSActive) {
              props.scrollTo(event.target.id);
            } else {
              props.scrollTo(event.target.id);
            }
          }}
          id={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
