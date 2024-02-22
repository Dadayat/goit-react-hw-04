import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from './apiService/api';
import css from './App.module.css';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './ImageModal/ImageModal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // const data = await getPhotos(query, page);
        // console.log('data', data);
        const { results, total } = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImeges => [...prevImeges, ...results]);
        setIsVisible(page < Math.ceil(total / results.length));
        // console.log(total / results.length);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
  };

  const onHandleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = item => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={css.container}>
        <h1>Image finder</h1>
        <SearchBar onSubmit={onHandleSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onClick={openModal} />
        )}
        {isVisible && (
          <LoadMoreBtn onClick={onHandleLoadMore} disabled={isLoading}>
            {isLoading ? 'loading...' : 'LOAD MORE'}
          </LoadMoreBtn>
        )}
        {selectedItem && (
          <ImageModal
            isOpen={!!selectedItem}
            onRequestClose={closeModal}
            selectedItem={selectedItem}
          />
        )}
        {!images.length && !isEmpty && <h2>Go search, baby🕶️</h2>}
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {isEmpty && <h2>Sorry, there are no images🥺 Please try again😉</h2>}
      </div>
    </>
  );
};
