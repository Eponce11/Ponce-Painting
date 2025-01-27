import "./ceo.scss";
import { heading, text, btn, ceo_img } from "./constants";

const CEO = () => {

  const formValidation = (data: any): boolean => {

    const errors = {};

    let isValid = true;

    if (data.name) {
      
    }


    return isValid
  }

  const sendEmail = () => {

  }

  return (
    <section className="ceo">
      <h2 className="ceo__heading">{heading}</h2>
      <p className="ceo__text">{text}</p>
      <a href={`${btn.link}`} className="ceo__btn">
        {btn.text}
      </a>
      <img src={ceo_img} alt="" className="ceo__img" />
    </section>
  );
};

export default CEO;
