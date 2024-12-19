import Navbar from "../../components/Navbar/Navbar";
import Company_Description from "./components/Company_Description/Company_Description";
import About_Company from "./components/About_Company/About_Company";
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
      <Company_Description />
      <About_Company />
      <CEO />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
