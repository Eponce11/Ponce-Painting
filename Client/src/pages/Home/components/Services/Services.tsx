import "./services.scss";
import Project_Management_Icon from "../../../../common/icons/project-management-icon.svg?react";
import Furniture_Installation_Icon from "../../../../common/icons/furniture-installation-icon.svg?react";
import Renovation_Icon from "../../../../common/icons/renovation-icon.svg?react";
import Wallpaper_Painting_Icon from "../../../../common/icons/wallpaper-painting-icon.svg?react";

const Services = () => {
  return (
    <section className="services">
      <h2 className="heading-2">
        From Vision To Reality Our Comprehensive Services
      </h2>
      <p className="services__text">
        Skyline offers a full spectrum of construction services, providing
        tailored solutions for every project. From initial planning and design
      </p>
      <button className="btn-primary">View More</button>

      <div className="services__list">
        <div className="service">
          <div className="service__icon">
            <Project_Management_Icon />
          </div>

          <h4 className="service__title">Project Management</h4>
          <p className="service__description">
            Skyline offers a full spectrum of construction services, providing
            tailored solutions
          </p>
          <a href="#" className="service__link">
            Learn More &rarr;
          </a>
        </div>
        <div className="service">
          <div className="service__icon">
            <Furniture_Installation_Icon />
          </div>
          <h4 className="service__title">Project Management</h4>
          <p className="service__description">
            Skyline offers a full spectrum of construction services, providing
            tailored solutions
          </p>
          <a href="#" className="service__link">
            Learn More &rarr;
          </a>
        </div>
        <div className="service">
          <div className="service__icon">
            <Renovation_Icon />
          </div>
          <h4 className="service__title">Project Management</h4>
          <p className="service__description">
            Skyline offers a full spectrum of construction services, providing
            tailored solutions
          </p>
          <a href="#" className="service__link">
            Learn More &rarr;
          </a>
        </div>
        <div className="service">
          <div className="service__icon">
            <Wallpaper_Painting_Icon />
          </div>
          <h4 className="service__title">Project Management</h4>
          <p className="service__description">
            Skyline offers a full spectrum of construction services, providing
            tailored solutions
          </p>
          <a href="#" className="service__link">
            Learn More &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
