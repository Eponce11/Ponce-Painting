import "./home.scss";

import Navbar from "../../components/Navbar/Navbar";
import About_Us from "../../components/About_Us/About_Us";
import Services from "./components/Services/Services";
import Projects from "../../components/Projects/Projects";
import CEO from "../../components/CEO/CEO";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="hero">Hero</div>
      <div className="brands">Brands</div>
      <About_Us />
      <Services />
      <Projects />
      <CEO />
      <Testimonials />
      <div className="contact">Contact</div>
      <Footer />
    </div>
  );
};

export default Home;
