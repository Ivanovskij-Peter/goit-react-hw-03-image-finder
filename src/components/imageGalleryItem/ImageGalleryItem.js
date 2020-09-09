import React from 'react';
import style from '../../components/App.module.css';

export function ImageGalleryItem({
  webformatURL,
  tags,
  elem,
  setLargeImageUrl,
  toggleModal,
}) {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => {
        setLargeImageUrl(elem.largeImageURL);
        toggleModal(true);
      }}
    >
      <img
        src={elem.webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
}
