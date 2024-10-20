import "./navbar.css";
import Menu from "./icons/menu.png"
import { navLinks } from "./constants";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div
          style={{ backgroundColor: "green", height: "60px", width: "72px" }}
        />
        <ul className="navbar-nav-links">
          {navLinks.map((navLink: any, idx: number) => {
            return (
              <li className="navbar-nav-link" key={idx}>
                {navLink.label}
              </li>
            );
          })}
          <li className="navbar-quote-btn">Get A Quote</li>
        </ul>
      </div>
      <img src={Menu} alt="menu" className="navbar-menu" />
    </nav>
  );
};

export default Navbar;
