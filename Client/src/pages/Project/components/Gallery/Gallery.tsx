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
              />
            );
          })}
        </div>
        <button className="gallery__btn">{button_txt}</button>
      </div>
    </section>
  );
};

export default Gallery;
