import { FiSearch } from 'react-icons/fi';
import css from './SearchBar.module.css';
import { useState } from 'react';
import { Notify } from 'notiflix';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      Notify.info('Enter your request, please!', {
        position: 'center-center',
        timeout: 3000,
        width: '400px',
        fontSize: '24px',
      });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchFormBtn}>
          <FiSearch size="28px" />
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
