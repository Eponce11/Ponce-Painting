import "./company_description.scss";
import {
  photo,
  heading,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
} from "./constants";

const Company_Description = () => {
  return (
    <section className="company-description">
      <div className="company-description__wrapper">
        <div className="company-description__photo-wrapper">
          <img
            src={photo.img}
            alt={photo.alt}
            className="company-description__photo"
          />
        </div>

        <div className="company-description__info">
          <h3 className="company-description__heading">{heading}</h3>
          <p className="company-description__text">{paragraph_1}</p>
          <p className="company-description__text">{paragraph_2}</p>
          <p className="company-description__text">{paragraph_3}</p>
          <p className="company-description__text">{paragraph_4}</p>
        </div>
      </div>
    </section>
  );
};

export default Company_Description;
