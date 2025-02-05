import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./common/sass/base/_base.scss";
import "./common/sass/base/_typography.scss";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Privacy_Policy from "./pages/Privacy_Policy/Privacy_Policy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/project/:projectName" element={<Project />} />
        <Route path="/privacy" element={<Privacy_Policy />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
