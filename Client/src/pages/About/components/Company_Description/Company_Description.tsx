import "./company_description.scss";
import Test from "../../../../common/imgs/project-1.png";

const Company_Description = () => {
  return (
    <section className="company-description">
      <div className="company-description__wrapper">
        <div className="company-description__photo-wrapper">
          <img src={Test} alt="" className="company-description__photo" />
        </div>

        <div className="company-description__info">
          <h3 className="company-description__heading">About Our Company</h3>
          <p className="company-description__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like
          </p>
          <p className="company-description__text">
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,
          </p>
          <p className="company-description__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <p className="company-description__text">
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company_Description;
