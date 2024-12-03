import "./testimonials.scss";
import CardSlider from "../Carousel/CardSlider";
import Star from "../../common/icons/star.svg?react";
import { heading, text, testimonials } from "./components";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <h2 className="testimonials__heading">{heading}</h2>
        <p className="testimonials__text">{text}</p>

        <div className="testimonials__list-container">
          <div className="testimonials__list">
            {testimonials.map((testimonial, idx) => {
              return (
                <figure className="testimonial" key={idx}>
                  <blockquote className="testimonial__quote">
                    {testimonial.quote}
                  </blockquote>
                  <div className="testimonial__rating">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <figcaption className="testimonial__client">
                    <img
                      src={testimonial.photo.img}
                      alt={testimonial.photo.alt}
                      className="testimonial__photo"
                    />
                    <div className="testimonial__info-box">
                      <p className="testimonial__user-name">
                        {testimonial.name}
                      </p>
                      <p className="testimonial__role">{testimonial.role}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <CardSlider />
      </div>
    </section>
  );
};

export default Testimonials;

/*
{testimonials.map((testimonial, idx) => {
              return (
                <figure className="testimonial" key={idx}>
                  <blockquote className="testimonial__quote">
                    {testimonial.quote}
                  </blockquote>
                  <div className="testimonial__rating">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <figcaption className="testimonial__client">
                    <img
                      src={testimonial.photo.img}
                      alt={testimonial.photo.alt}
                      className="testimonial__photo"
                    />
                    <div className="testimonial__info-box">
                      <p className="testimonial__user-name">
                        {testimonial.name}
                      </p>
                      <p className="testimonial__role">{testimonial.role}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}*/
