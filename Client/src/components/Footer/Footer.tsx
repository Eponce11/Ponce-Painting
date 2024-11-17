import "./footer.scss";
import { logo, text, list_1, list_2, list_3, company_name } from "./constants";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo-box">
          <img src={logo} alt="Logo" className="logo-box__logo" />
          <p className="logo-box__text">{text}</p>
        </div>
        <div className="footer__nav-list">
          <h4 className="nav-list__heading">{list_1.title}</h4>
          <ul className="nav-list__set">
            {list_1.links.map((link, idx) => (
              <li className="nav-list__item" key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__partner-list">
          <h4 className="partner-list__heading">{list_2.title}</h4>
          <ul className="partner-list__set">
            {list_2.links.map((link, idx) => (
              <li className="partner-list__item" key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__support-list">
          <h4 className="support-list__heading">{list_3.title}</h4>
          <ul className="support-list__set">
            {list_3.links.map((link, idx) => (
              <li className="support-list__item" key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <p className="footer__copyright">
          Copyright &copy; 2024 {company_name} | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
