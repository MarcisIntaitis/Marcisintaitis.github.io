import "../styles/main.css";
import profileImage from "../images/profile image.jpg";
import locationPin from "../images/location_on_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

export const Main = () => {
  return (
    <section className="main-container container">
      <img className="profile-image" src={profileImage} alt="Marcis profile" />
      <div className="information">
        <div className="greeting-div">
          <h1 className="greeting">Mārcis Intaitis</h1>
        </div>
        <div className="profession-div">
          <h2 className="profession">Junior web developer</h2>
        </div>
        <div className="location-div">
          <p className="location">
            <img src={locationPin} alt="location" className="location-pin" />
            Riga, Latvia
          </p>
        </div>
      </div>
    </section>
  );
};
