import "./hero.scss";
import Test from "../../../../common/imgs/project-1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info-block">
        <div className="hero-info-block__tag">
          <p>Trusted Construction Partner</p>
        </div>
        <h1 className="hero-info-block__heading">
          Comprehensive Construction Solutions By Skyline
        </h1>
        <img src={Test} alt="" className="hero-info-block__photo" />
        <p className="hero-info-block__text">
          Skyline offers a full spectrum of construction services, providing
          tailored solutions for every project. From initial planning and design
          to execution and completion, our team ensures precision
        </p>
        <button className="hero-info-block__btn--1">Get Started</button>
        <button className="hero-info-block__btn--2">Explore Services</button>
      </div>
      <div className="hero__photo-block">
        <img src={Test} alt="" className="hero-photo-block__photo--1" />
        <img src={Test} alt="" className="hero-photo-block__photo--2" />
      </div>
    </section>
  );
};

export default Hero;
