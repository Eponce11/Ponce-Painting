import "./project_summary.scss";
import Test from "../../../../common/imgs/project-1.png";

const Project_Summary = () => {
  return (
    <section className="project-summary">
      <div className="project-summary__wrapper">
        <h2 className="project-summary__heading">
          Home construction in Malibu Beach
        </h2>
        <img src={Test} alt="" className="project-summary__photo" />
        <p className="project-summary__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse varius enim in eros elementum
          tristique.
        </p>
      </div>
    </section>
  );
};

export default Project_Summary;
