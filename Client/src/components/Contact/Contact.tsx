import "./contact.scss";
import Test from "../../common/imgs/project-1.png";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  isValid?: boolean;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    isValid: false,
  });

  const formValidation = (data: FormData): boolean => {
    const currentErrors = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      isValid: true,
    };

    if (data.name.length < 1) {
      currentErrors.name = " *Required";
      currentErrors.isValid = false;
    }

    // Need to add regex expression
    if (data.name.length < 1) {
      // currentErrors.name = "Input Field Required";
      currentErrors.isValid = false;
    }

    // Phone Number
    if (data.name.length < 1) {
      // currentErrors.name = "Input Field Required";
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

    setErrors(currentErrors);

    return currentErrors.isValid;
  };

  const sendEmail = () => {
    console.log("Test");
    const data: FormData = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
    };

    const isDataValid = formValidation(data);
    console.log(errors);
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
            {errors.name && <span className="form__error">{errors.name}</span>}
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
            {errors.email && (
              <span className="form__error">{errors.email}</span>
            )}
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
            {errors.phone && (
              <span className="form__error">{errors.phone}</span>
            )}
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
            {errors.company && (
              <span className="form__error">{errors.company}</span>
            )}
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
            {errors.message && (
              <span className="form__error">{errors.message}</span>
            )}
          </label>
          <textarea
            className="form__textarea"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <span className="form__btn" onClick={sendEmail}>
          Get In Touch
        </span>
      </form>
    </section>
  );
};

export default Contact;
