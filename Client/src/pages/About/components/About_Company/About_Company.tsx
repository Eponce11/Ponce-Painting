import "./about_company.scss";
import { photo_1, photo_2, paragraph } from "./constants";

const About_Company = () => {
  return (
    <section className="about-company">
      <div className="about-company__wrapper">
        <img
          src={photo_1.img}
          alt={photo_1.alt}
          className="about-company__photo about-company__photo--1"
        />
        <img
          src={photo_2.img}
          alt={photo_2.alt}
          className="about-company__photo about-company__photo--2"
        />
        <p className="about-company__text">{paragraph}</p>
      </div>
    </section>
  );
};

export default About_Company;
