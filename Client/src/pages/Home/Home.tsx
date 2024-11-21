import "./home.scss";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import About_Us from "../../components/About_Us/About_Us";
import Services from "./components/Services/Services";
import Projects from "../../components/Projects/Projects";
import CEO from "../../components/CEO/CEO";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Brands />
      <About_Us />
      <Services />
      <Projects />
      <CEO />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
