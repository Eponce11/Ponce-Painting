import { page_title, projects } from "./constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Trail from "../../components/Trail/Trail";
import Project_Summary from "./components/Project_Summary/Project_Summary";
import Gallery from "./components/Gallery/Gallery";
import Project_Breakdown from "./components/Project_Breakdown/Project_Breakdown";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Project = () => {
  const [project, setProject] = useState<any>(null);
  const { projectName } = useParams();

  useEffect(() => {
    const strProjectName = projectName?.toString();
    if (!strProjectName || !projects.hasOwnProperty(strProjectName)) return;
    setProject(projects[strProjectName]);
  }, [projectName]);

  return (
    <div className="container">
      {project && (
        <>
          <Navbar />
          <Trail page_title={page_title} />
          <Project_Summary project_summary={project.project_summary} />
          <Gallery gallery={project.gallery}/>
          <Project_Breakdown />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Project;
