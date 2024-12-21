import "./trail.scss";

interface TrailProps {
  page_title: string;
}

const Trail = (props: TrailProps) => {
  const { page_title } = props;

  return (
    <section className="trail">
      <div className="trail__wrapper">
        <h3 className="trail__heading">{page_title}</h3>
        <div className="trail__crumbs">
          <p className="trail__text">Home</p>
          <p className="trail__text">&#10141;</p>
          <p className="trail__text">{page_title}</p>
        </div>
      </div>
    </section>
  );
};

export default Trail;
