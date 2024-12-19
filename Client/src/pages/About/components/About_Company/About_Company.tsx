import "./about_company.scss";
import Test from "../../../../common/imgs/project-1.png";

const About_Company = () => {
  return (
    <section className="about-company">
      <div className="about-company__wrapper">
        <img
          src={Test}
          alt=""
          className="about-company__photo about-company__photo--1"
        />
        <img
          src={Test}
          alt=""
          className="about-company__photo about-company__photo--2"
        />
        <p className="about-company__text">
          Skyline offers a full spectrum of construction services, providing
          tailored solutions for every project. From initial planning and design
          to execution and completion, our team Lorem ipsum dolor sit amet
          consectetur urna sed odio id mattis donec viverra sed neque sit porta
          mauris eros aliquet volutpat eu consequat at turpis aliquet
          maecenas porta dignissim. Lorem ipsum dolor sit amet consectetur urna
          sed odio id mattis donec viverra sed neque sit porta mauris eros
          aliquet volutpat eu consequat
        </p>
      </div>
    </section>
  );
};

export default About_Company;
