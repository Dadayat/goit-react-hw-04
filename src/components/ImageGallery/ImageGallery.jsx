import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        // console.log(image)
        <li
          key={image.id}
          className={css.photoCard}
          onClick={() => onClick(image)}
        >
          <ImageCard item={image} />
        </li>
      ))}
    </ul>
  );
};
