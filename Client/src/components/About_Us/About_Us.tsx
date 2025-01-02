import "./about_us.scss";
import { photo_1, photo_2, heading, text, btn } from "./constants";

const About_Us = () => {
  return (
    <section className="about-us">
      <div className="about-us__wrapper">
        <div className="about-us__img-block">
          <img src={photo_1} alt="Photo 1" className="img-block__photo--1" />
          <img src={photo_2} alt="Photo 2" className="img-block__photo--2" />
        </div>
        <div className="about-us__info-block">
          <h2 className="info-block__heading">{heading}</h2>
          <p className="info-block__text">{text}</p>
          <a href={`${btn.link}`} className="info-block__btn">
            {btn.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About_Us;
