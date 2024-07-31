import "./Navbar.css";

function Navbar(props) {
  const { summaryRef, experienceRef, skillsRef, bioContainerRef } = props;
  const scrollToLink = (ref) => {
    // ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    const y = ref.current.getBoundingClientRect().top;
    const offset = window.screen.availWidth > 1000 ? 120 : 0;
    const windowScroll = window.scrollY;
    window.scrollTo({
      top: y + windowScroll - offset,
      behavior: "smooth",
    });
  };
  return (
    <div className="Navbar-container">
      <button onClick={() => scrollToLink(bioContainerRef)}>bio</button>
      <button onClick={() => scrollToLink(summaryRef)}>summary</button>
      <button onClick={() => scrollToLink(experienceRef)}>experience</button>
      <button onClick={() => scrollToLink(skillsRef)}>skills</button>
    </div>
  );
}

export default Navbar;
