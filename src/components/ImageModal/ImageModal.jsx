import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');
export const ImageModal = ({
  selectedItem: { urls, alt_description, description, likes },
  isOpen,
  onRequestClose,
}) => {
  return (
    <div className={css.backdrop}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.modal}
      >
        <div className={css.container}>
          <img src={urls.regular} alt={alt_description} />
          <p className={css.text}>{description}</p>
          <p>❤️ {likes}</p>
        </div>
      </Modal>
    </div>
  );
};
