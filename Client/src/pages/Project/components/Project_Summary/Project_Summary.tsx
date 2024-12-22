import "./project_summary.scss";

interface ProjectSummaryProps {
  project_summary: {
    name: string;
    photo: {
      img: any;
      alt: string;
    };
    summary: string;
  };
}

const Project_Summary = (props: ProjectSummaryProps) => {
  const { name, photo, summary } = props.project_summary;

  return (
    <section className="project-summary">
      <div className="project-summary__wrapper">
        <h2 className="project-summary__heading">{name}</h2>
        <img
          src={photo.img}
          alt={photo.alt}
          className="project-summary__photo"
        />
        <p className="project-summary__description">{summary}</p>
      </div>
    </section>
  );
};

export default Project_Summary;
