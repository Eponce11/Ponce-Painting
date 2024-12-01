import "./navbar.scss";
import { logo, links, btn_text } from "./constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktopNav, setIsDesktopNav] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsDesktopNav(true);
    } else {
      setIsDesktopNav(false);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const desktopNav = (
    <>
      <ul className="nav__list">
        {links.map((link, idx) => (
          <li className="list__item" key={idx}>
            {link}
          </li>
        ))}
      </ul>
      <button className="nav__btn">{btn_text}</button>
    </>
  );

  const mobileNav = isMenuOpen && (
    <ul className="nav__list">
      {links.map((link, idx) => (
        <li className="list__item" key={idx}>
          {link}
        </li>
      ))}
      <li className="list__item">
        <button className="nav__btn">{btn_text}</button>
      </li>
    </ul>
  );

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="Logo" className="nav__logo" />
        {isDesktopNav ? desktopNav : mobileNav}
        <div
          className="nav__icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
