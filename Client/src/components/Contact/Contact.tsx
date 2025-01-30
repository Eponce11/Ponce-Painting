import "./contact.scss";
import Test from "../../common/imgs/project-1.png";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>();
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    isValid: "",
  });

  const formValidation = (data: any): boolean => {
    const currentErrors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      isValid: true,
    };

    if (data.name.length < 1) {
      currentErrors.name = "Input Field Required";
      currentErrors.isValid = false;
    }

    // Need to add regex expression
    if (data.name.length < 1) {
      currentErrors.name = "Input Field Required";
      currentErrors.isValid = false;
    }

    // Phone Number
    if (data.name.length < 1) {
      currentErrors.name = "Input Field Required";
      currentErrors.isValid = false;
    }

    if (data.company.length < 1) {
      currentErrors.company = "Input Field Required";
      currentErrors.isValid = false;
    }

    if (data.message.length < 1) {
      currentErrors.message = "Input Field Required";
      currentErrors.isValid = false;
    }

    setErrors(errors);

    return currentErrors.isValid;
  };

  const sendEmail = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
    };

    const isDataValid = formValidation(data);
    if (!isDataValid) return;

    // Send Email if Data is Valid
  };

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
