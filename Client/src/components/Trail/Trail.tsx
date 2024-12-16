import "./trail.scss";

const Trail = () => {
  return (
    <section className="trail">
      <div className="trail__wrapper">
        <h3 className="trail__heading">
          Project Details
        </h3>
        <div className="trail__crumbs">
          <p className="trail__text">Home</p>
          <p className="trail__text">&#10141;</p>
          <p className="trail__text">Project Details</p>
        </div>
      </div>
    </section>
  );
};

export default Trail;
