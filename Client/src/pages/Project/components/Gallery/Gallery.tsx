import { useState, useEffect } from "react";
import "./gallery.scss";

interface GalleryProps {
  gallery: {
    photos: [
      {
        img: any;
        alt: string;
      }
    ];
    button_txt: string;
  };
}

const Gallery = (props: GalleryProps) => {
  const { photos, button_txt } = props.gallery;

  const [pictureIdx, setPictureIdx] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth > 900) setPictureIdx(0);
  };

  useEffect(() => {
    window.addEventListener("windowSize", handleResize);
  }, []);

  const modal = (
    <div className="modal">
      <div className="modal_photo" />
    </div>
  );

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__imgs">
          {photos.map((photo: any, idx: number) => {
            return (
              <img
                key={idx}
                src={photo.img}
                alt={photo.alt}
                className={`gallery__photo gallery__photo--${idx + 1}`}
                onClick={() => setIsModalOpen(true)}
              />
            );
          })}
        </div>
        <button className="gallery__btn">{button_txt}</button>
      </div>

      {isModalOpen && modal}
    </section>
  );
};

export default Gallery;
