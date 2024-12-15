import Navbar from "../../components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Project = () => {
  return <div className="container">
    <Navbar />
    <Gallery />
    <Projects />
    <Testimonials />
    <Footer />
  </div>;
};

export default Project;
