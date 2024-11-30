import "./navbar.scss";
import { logo, links, btn_text } from "./constants";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="Logo" className="nav__logo" />
        <ul className="nav__list">
          {links.map((link, idx) => (
            <li className="list__item" key={idx}>
              {link}
            </li>
          ))}
        </ul>
        <button className="nav__btn">{btn_text}</button>
        <div className="nav__menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
