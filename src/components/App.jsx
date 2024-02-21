import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { onFetchError } from './ErrorMessage/ErrorMessage';
import { getPhotos } from './apiService/api';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImeges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { results, length, total } = await getPhotos(query, page);
        if (results === 0) {
          setIsEmpty(true);
          return;
        }

        // console.log(data, 'data');
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
  };
  return (
    <>
      <h1>Image finder</h1>
      <SearchBar onSubmit={onHandleSubmit} />
    </>
  );
};
