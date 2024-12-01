import "./navbar.scss";
import { logo, links, btn_text } from "./constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const desktopNav = (
    <>
      {isMenuOpen && (
        <ul className="nav__list">
          {links.map((link, idx) => (
            <li className="list__item" key={idx}>
              {link}
            </li>
          ))}
        </ul>
      )}
      <button className="nav__btn">{btn_text}</button>
    </>
  );

  const mobileNav = (
    <ul className="nav__list">
      {links.map((link, idx) => (
        <li className="list__item" key={idx}>
          {link}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="Logo" className="nav__logo" />
        {desktopNav}
        <div
          className="nav__icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
