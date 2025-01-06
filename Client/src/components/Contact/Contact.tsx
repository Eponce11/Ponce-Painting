import "./contact.scss";
import Test from "../../common/imgs/project-1.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <img src={Test} alt="" className="contact__img" />
      <h2 className="contact__heading">Get A Free Quote</h2>
      <form className="contact__form">
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input type="text" className="form__input" placeholder="Enter your name"/>
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Email
          </label>
          <input type="text" className="form__input" placeholder="Add you email"/>
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Phone
          </label>
          <input type="text" className="form__input" placeholder="Enter your phone"/>
        </div>
        <div className="form__pair--input">
          <label htmlFor="name" className="form__label">
            Company
          </label>
          <input type="text" className="form__input" placeholder="Add your company"/>
        </div>
        <div className="form__pair--textarea">
          <label htmlFor="name" className="form__label">
            Message
          </label>
          <textarea className="form__textarea" placeholder="Type your message here..." ></textarea>
        </div>
        <button className="form__btn">
          Get In Touch
        </button>
      </form>
    </section>
  );
};

export default Contact;
