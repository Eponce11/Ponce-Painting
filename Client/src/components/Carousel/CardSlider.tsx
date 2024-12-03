import "./cardSlider.scss";

interface CardSliderProps {}

const CardSlider = (props: CardSliderProps) => {
  return (
    <div className="card-slider">
      <div className="card-slider__prev-btn"></div>
      <div className="card-slider__next-btn"></div>
    </div>
  );
};

export default CardSlider;
