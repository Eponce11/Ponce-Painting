import "./brands.scss";
import Brand_1 from "../../../../common/icons/brand-logo-1.svg?react";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__wrapper">
        <div className="brands__block--1">
          <Brand_1 />
          <Brand_1 />
          <Brand_1 />
        </div>
        <div className="brands__block--2">
          <Brand_1 />
          <Brand_1 />
        </div>
      </div>
    </section>
  );
};

export default Brands;
