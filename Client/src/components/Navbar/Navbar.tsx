// import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo"></div>
      <ul className="nav__list">
        <li className="list__item">Home</li>
        <li className="list__item">About Us</li>
        <li className="list__item">Services</li>
        <li className="list__item">Projects</li>
      </ul>
      <button className="btn--1">Get a Quote</button>
    </nav>
  );
};

export default Navbar;

/*
<div className="nav__wrapper">
        <div className="logo"></div>
        <ul className="nav__list">
          <li className="list__item">Home</li>
          <li className="list__item">About Us</li>
          <li className="list__item">Services</li>
          <li className="list__item">Projects</li>
        </ul>
        <button className="btn--1">Get a Quote</button>
      </div>
*/
