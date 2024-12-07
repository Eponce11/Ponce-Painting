import "./hero.scss";
import Test from "../../../../common/imgs/project-1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__heading">
          Transforming Spaces, Elevating Experiences
        </h1>
        <p className="hero__text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even
        </p>
        <button className="hero__btn">Explore Our Services</button>
      </div>
    </section>
  );
};

export default Hero;
