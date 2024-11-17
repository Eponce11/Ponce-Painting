import "./navbar.scss";
import { logo, links, btn_text } from "./constants";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav__logo" />
      <ul className="nav__list">
        {links.map((link, idx) => (
          <li className="list__item" key={idx}>
            {link}
          </li>
        ))}
      </ul>
      <button className="nav__btn">{btn_text}</button>
    </nav>
  );
};

export default Navbar;
