import "./hero.scss";
import Test from "../../../../common/imgs/project-1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__info-block">
          <div className="hero-info-block__tag">
            <p>Trusted Construction Partner</p>
          </div>
          <h1 className="hero-info-block__heading--1">Transforming</h1>
          <div className="hero-info-block__photo-container">
            <h1 className="hero-info-block__heading--2">Homes and</h1>
            <img src={Test} alt="" className="hero-info-block__photo" />
          </div>
          <h1 className="hero-info-block__heading--3">Commercial Spaces</h1>
          <p className="hero-info-block__text">
            Skyline offers a full spectrum of construction services, providing
            tailored solutions for every project. From initial planning and
            design to execution and completion, our team ensures precision
          </p>
          <div className="hero-info-block__btn-container">
            <button className="hero-info-block__btn--1">Get Started</button>
            <button className="hero-info-block__btn--2">
              Explore Services
            </button>
          </div>
        </div>
        <div className="hero__photo-block"></div>
      </div>
    </section>
  );
};

export default Hero;
/*
<img src={Test} alt="" className="hero-photo-block__photo--1" />
        <img src={Test} alt="" className="hero-photo-block__photo--2" />*/
