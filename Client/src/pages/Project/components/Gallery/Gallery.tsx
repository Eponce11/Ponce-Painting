import "./gallery.scss";
import Test from "../../../../common/imgs/project-1.png";

interface GalleryProps {
  photos: [
    {
      img: any;
      alt: string;
    }
  ]
}

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__imgs">
          <img src={Test} alt="" className="gallery__photo gallery__photo--1" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--2" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--3" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--4" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--5" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--6" />
          <img src={Test} alt="" className="gallery__photo gallery__photo--7" />
        </div>
        <button className="gallery__btn">View All Pictures</button>
      </div>
    </section>
  );
};

export default Gallery;
