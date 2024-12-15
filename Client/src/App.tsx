import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./common/sass/base/_base.scss";
import "./common/sass/base/_typography.scss";

import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
