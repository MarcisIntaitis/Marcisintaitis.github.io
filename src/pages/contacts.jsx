import "../styles/contacts.css";

export const Contacts = () => {
  return (
    <section className="container" id="contacts">
      <p className="title-text">Get in contact with me!</p>
      <div className="social-links">
        <a
          href="https://github.com/marcisintaitis"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/m%C4%81rcis-intaitis-613ba7228/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          LinkedIn
        </a>
        <a
          href="mailto: marcisintaitis@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Email
        </a>
      </div>
    </section>
  );
};
