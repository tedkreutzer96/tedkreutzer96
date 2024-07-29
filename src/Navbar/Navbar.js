import "./Navbar.css";

function Navbar(props) {
  const { summaryRef, experienceRef, skillsRef } = props;
  const scrollToLink = (ref) => {
    // ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    const y = ref.current.getBoundingClientRect().top;
    const offset = 120;
    const windowScroll = window.scrollY;
    window.scrollTo({
      top: y + windowScroll - offset,
      behavior: "smooth",
    });
  };
  return (
    <div className="Navbar-container">
      <button onClick={() => scrollToLink(summaryRef)}>summary</button>
      <button onClick={() => scrollToLink(experienceRef)}>experience</button>
      <button onClick={() => scrollToLink(skillsRef)}>skills</button>
    </div>
  );
}

export default Navbar;
