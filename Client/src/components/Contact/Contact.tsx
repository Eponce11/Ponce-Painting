import "./contact.scss";
import Test from "../../common/imgs/project-1.png";
import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>();
  const [message, setMessage] = useState<string>("");

  const formValidation = (data: any): boolean => {
    const errors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    };

    let isValid = true;

    if (data.name.length < 1) {
      errors.name = "Input Field Required";
    }

    // Need to add regex expression
    if (data.name.length < 1) {
      errors.name = "Input Field Required";
    }

    // Phone Number
    if (data.name.length < 1) {
      errors.name = "Input Field Required";
    }

    if (data.company.length < 1) {
      errors.company = "Input Field Required";
    }

    if (data.message.length < 1) {
      errors.message = "Input Field Required";
    }

    return isValid;
  };

  const sendEmail = () => {};

  return (
    <section className="contact" id="contact">
      <img src={Test} alt="" className="contact__img" />
      <h2 className="contact__heading">Get A Free Quote</h2>
      <form className="contact__form">
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Email
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Add you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Phone
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Company
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Add your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form__pair--textarea">
          <label htmlFor="name" className="form__label">
            Message
          </label>
          <textarea
            className="form__textarea"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="form__btn">Get In Touch</button>
      </form>
    </section>
  );
};

export default Contact;
