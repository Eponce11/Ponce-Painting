import "./navbar.scss";
import { logo, links, btn } from "./constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

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

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="Logo" className="nav__logo" />
        {isMenuOpen && (
          <ul className="nav__list">
            {links.map((link, idx) => (
              <li className="list__item" key={idx}>
                <a href={`${link.link}`} className="nav__link">
                  {link.text}
                </a>
              </li>
            ))}
            <li className="list__item">
              <a href={`${btn.link}`} className="nav__btn">
                {btn.text}
              </a>
            </li>
          </ul>
        )}
        <div
          className="nav__icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
