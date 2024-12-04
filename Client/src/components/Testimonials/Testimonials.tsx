import "./testimonials.scss";
import Star from "../../common/icons/star.svg?react";
import { heading, text, testimonials } from "./components";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonialIdx, setTestimonialIdx] = useState<number>(0);

  const handleResize = () => {
    if (window.innerWidth > 900) setTestimonialIdx(0)
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIdx((idx) => {
      if (idx === testimonials.length - 1) return 0;
      return idx + 1;
    });
  };

  const prevTestimonial = () => {
    setTestimonialIdx((idx) => {
      if (idx === 0) return testimonials.length - 1;
      return idx - 1;
    });
  };

  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <h2 className="testimonials__heading">{heading}</h2>
        <p className="testimonials__text">{text}</p>

        <div className="testimonials__list-container">
          <div className="testimonials__list">
            {testimonials.map((testimonial, idx) => {
              return (
                <figure
                  className="testimonial"
                  key={idx}
                  style={{ translate: `${-100 * testimonialIdx}%` }}
                >
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

        <div className="card-slider">
          <div
            className="card-slider__prev-btn"
            onClick={prevTestimonial}
          >
            &larr;
          </div>
          <div
            className="card-slider__next-btn"
            onClick={nextTestimonial}
          >
            &rarr;
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
