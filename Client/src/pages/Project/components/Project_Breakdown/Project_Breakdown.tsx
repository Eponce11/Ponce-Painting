import "./project_breakdown.scss";
interface ProjectBreakdownProps {
  project_breakdown: {
    heading_1: string;
    paragraph_1: string;
    heading_2: string;
    paragraph_2: string;
    list: string[];
    heading_3: string;
    paragraph_3: string;
  };
}

const Project_Breakdown = (props: ProjectBreakdownProps) => {
  const {
    heading_1,
    paragraph_1,
    heading_2,
    paragraph_2,
    list,
    heading_3,
    paragraph_3,
  } = props.project_breakdown;

  return (
    <section className="project-breakdown">
      <div className="project-breakdown__wrapper">
        <div className="project-breakdown__section">
          <h2 className="project-breakdown__heading">{heading_1}</h2>
          <p className="project-breakdown__text">{paragraph_1}</p>
        </div>

        <div className="project-breakdown__section">
          <h2 className="project-breakdown__heading">{heading_2}</h2>
          <p className="project-breakdown__text">{paragraph_2}</p>
          <ul className="project-breakdown__list">
            {list.map((item: any, idx: number) => {
              return (
                <li key={idx} className="project-breakdown__item">
                  <p className="project-breakdown__text">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="project-breakdown__section">
          <h2 className="project-breakdown__heading">{heading_3}</h2>
          <p className="project-breakdown__text">{paragraph_3}</p>
        </div>
      </div>
    </section>
  );
};

export default Project_Breakdown;
