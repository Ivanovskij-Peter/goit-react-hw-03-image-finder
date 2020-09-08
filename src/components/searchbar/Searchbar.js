import React from 'react';
import style from '../../components/App.module.css';

export function Search({ getQwery }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    formData.forEach((value, name) => {
      getQwery(value);
    });
  };
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          name="qwery"
        />
      </form>
    </header>
  );
}
