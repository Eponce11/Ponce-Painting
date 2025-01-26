import { useState } from "react";
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

  const openModal = (idx: number) => {
    setPictureIdx(idx);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPictureIdx(0);
  };

  const nextPhoto = () => {
    setPictureIdx((idx) => {
      if (idx === photos.length - 1) return 0;
      return idx + 1;
    });
  };

  const prevPhoto = () => {
    setPictureIdx((idx) => {
      if (idx === 0) return photos.length - 1;
      return idx - 1;
    });
  };

  const modal = (
    <div className="modal">
      <div className="modal__photo-container">
        {photos.map((photo: any, idx: number) => {
          return (
            <div
              className="modal__photo-wrapper"
              style={{ translate: `${-100 * pictureIdx}%` }}
            >
              <img
                key={idx}
                src={photo.img}
                alt={photo.alt}
                className="modal__photo"
              />
            </div>
          );
        })}
      </div>

      <div className="modal__previous" onClick={prevPhoto}>
        <span>&larr;</span>
      </div>
      <div className="modal__next" onClick={nextPhoto}>
        <span>&rarr;</span>
      </div>
      <div className="modal__exit" onClick={closeModal} />
      <span className="modal__photo-number">
        {`${pictureIdx + 1} / ${photos.length}`}
      </span>
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
                onClick={() => openModal(idx)}
              />
            );
          })}
        </div>
        <button className="gallery__btn" onClick={() => openModal(0)}>
          {button_txt}
        </button>
      </div>

      {isModalOpen && modal}
    </section>
  );
};

export default Gallery;
