import "./home.scss";

import Services from "./components/Services/Services";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return <div className="container">
    <Navbar />
    <div className="hero">Hero</div>
    <div className="brands">Brands</div>
    <div className="about-us">About Us</div>
    <Services />
    <Projects />
    <div className="ceo">CEO</div>
    <div className="testimonials">Testimonials</div>
    <div className="contact">Contact</div>
    <div className="footer">Footer</div>
  </div>;
};

export default Home;
