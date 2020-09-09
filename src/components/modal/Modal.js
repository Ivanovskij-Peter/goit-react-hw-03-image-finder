import React from 'react';
import style from '../../components/App.module.css';

function Modal({ largeImageURL, toggleModal }) {
  return (
    <div className={style.Overlay} onClick={() => toggleModal(false)}>
      <div className={style.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
export default Modal;
