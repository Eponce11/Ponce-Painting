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
  return <div className="container">
    <Navbar />
    <Trail />
    <Project_Summary />
    <Gallery />
    <Project_Breakdown />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>;
};

export default Project;
