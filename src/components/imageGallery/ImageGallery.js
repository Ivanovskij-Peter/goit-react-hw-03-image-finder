import React from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';
import style from '../../components/App.module.css';

export function ImageGallery({ data }) {
  return (
    <ul className={style.ImageGallery}>
      {data.map(elem => (
        <ImageGalleryItem key={elem.id} elem={elem} />
      ))}
    </ul>
  );
}
