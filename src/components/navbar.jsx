import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <section className="nav-container">
      <a href="#hero" className="nav-link">
        Main
      </a>
      <a href="#projects" className="nav-link">
        Projects
      </a>
      <a href="#contacts" className="nav-link">
        Contacts
      </a>
    </section>
  );
};
