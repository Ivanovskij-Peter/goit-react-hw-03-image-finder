import React from 'react';
import style from '../../components/App.module.css';

export function ImageGalleryItem({ webformatURL, tags, elem }) {
  console.log(elem);
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={elem.webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
}
