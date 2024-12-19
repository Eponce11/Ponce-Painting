import Navbar from "../../components/Navbar/Navbar";
import Trail from "../../components/Trail/Trail";
import CEO from "../../components/CEO/CEO";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <Trail />
      <CEO />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
