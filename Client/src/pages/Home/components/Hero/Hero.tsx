import "./hero.scss";
import { heading, text, btn } from "./constants";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__text">{text}</p>
        <a href={`${btn.link}`} className="hero__btn">
          {btn.text}
        </a>
      </div>
    </section>
  );
};

export default Hero;
