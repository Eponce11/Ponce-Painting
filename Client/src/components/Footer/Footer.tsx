import "./footer.scss";
import { logo, text, list_1, list_2, list_3, company_name } from "./constants";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo-box">
          <img src={logo} alt="Logo" className="footer__logo" />
          <p className="footer__text">{text}</p>
        </div>

        <div className="footer__list">
          <h4 className="footer__heading">{list_1.title}</h4>
          <ul className="footer__set">
            {list_1.links.map((item, idx) => (
              <li className="footer__item" key={idx}>
                <a href={item.link} className="footer__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__list">
          <h4 className="footer__heading">{list_2.title}</h4>
          <ul className="footer__set">
            {list_2.links.map((item, idx) => (
              <li className="footer__item" key={idx}>
                <a href={item.link} className="footer__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__list">
          <h4 className="footer__heading">{list_3.title}</h4>
          <ul className="footer__set">
            {list_3.links.map((item, idx) => (
              <li className="footer__item" key={idx}>
                <a href={item.link} className="footer__link">
                  {item.label}
                </a>
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
