import Navbar from "../../components/Navbar/Navbar";
import Project_Summary from "./components/Project_Summary/Project_Summary";
import Gallery from "./components/Gallery/Gallery";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Project = () => {
  return <div className="container">
    <Navbar />
    <Project_Summary />
    <Gallery />
    <Projects />
    <Testimonials />
    <Footer />
  </div>;
};

export default Project;
