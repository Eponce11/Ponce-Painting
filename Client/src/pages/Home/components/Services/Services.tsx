import "./services.scss";
import { services, heading, text, btn } from "./constants";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__heading">{heading}</h2>
      <p className="services__text">{text}</p>
      <a href={`${btn.link}`} className="services__btn">
        {btn.text}
      </a>
      <div className="services__list">
        {services.map((service: any, idx: number) => {
          return (
            <div className="service" key={idx}>
              <div className="service__icon">{service.icon}</div>
              <h4 className="service__title">{service.title}</h4>
              <p className="service__description">{service.description}</p>
              <a className="service__link" href={`${service.link.link}`}>
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
