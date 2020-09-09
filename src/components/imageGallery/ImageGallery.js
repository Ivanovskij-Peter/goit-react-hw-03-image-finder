import React, { useState } from 'react';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';
import style from '../../components/App.module.css';
import Modal from '../modal/Modal';

export function ImageGallery({ data }) {
  const [modalOpen, toggleModal] = useState(false);
  const [largeImageURL, setLargeImageUrl] = useState('');
  return (
    <>
      <ul className={style.ImageGallery}>
        {data.map(elem => (
          <ImageGalleryItem
            key={elem.id}
            elem={elem}
            setLargeImageUrl={setLargeImageUrl}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
      {modalOpen && (
        <Modal largeImageURL={largeImageURL} toggleModal={toggleModal} />
      )}
    </>
  );
}
