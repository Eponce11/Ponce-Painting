import "./projects.scss";
import { heading, text, btn_text, projects } from "./constants";

const Projects = () => {
  
  return (
    <section className="projects">
      <div className="projects__wrapper">
        <h2 className="projects__heading">{heading}</h2>
        <p className="projects__text">{text}</p>
        <button className="projects__btn">{btn_text}</button>

        <div className="projects__list">
          {projects.map((project, idx) => {
            return (
              <div className="project" key={idx}>
                <img src={project.img.img} alt={project.img.alt} className="project__img" />
                <h4 className="project__title">{project.title}</h4>
                <p className="project__description">{project.description}</p>
                <div className="project__line" />
                <p className="project__type">
                  {project.type.icon}
                  {project.type.text}
                </p>
                <p className="project__date">
                  {project.date.icon}
                  {project.date.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
