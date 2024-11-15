import "./services.scss";
import { services, heading, text, btn_text } from "./constants";

const Services = () => {
  return (
    <section className="services">
      <h2 className="services__heading">{heading}</h2>
      <p className="services__text">{text}</p>
      <button className="services__btn">{btn_text}</button>
      <div className="services__list">
        {services.map((service: any, idx: number) => {
          return (
            <div className="service" key={idx}>
              <div className="service__icon">{service.icon}</div>
              <h4 className="service__title">{service.title}</h4>
              <p className="service__description">{service.description}</p>
              <a href={service.link.link} className="service__link">
                {service.link.text} &rarr;
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
