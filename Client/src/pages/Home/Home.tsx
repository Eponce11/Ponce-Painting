import "./home.scss";

import Services from "./components/Services/Services";
import Projects from "../../components/Projects/Projects";
import CEO from "../../components/CEO/CEO";
import Testimonials from "../../components/Testimonials/Testimonials";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return <div className="container">
    <Navbar />
    <div className="hero">Hero</div>
    <div className="brands">Brands</div>
    <div className="about-us">About Us</div>
    <Services />
    <Projects />
    <CEO />
    <Testimonials />
    <div className="contact">Contact</div>
    <div className="footer">Footer</div>
  </div>;
};

export default Home;
