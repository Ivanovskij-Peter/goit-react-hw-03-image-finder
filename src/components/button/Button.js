import React from 'react';
import style from '../../components/App.module.css';

export function Button({ newPage }) {
  return (
    <button className={style.Button} onClick={newPage}>
      Load more
    </button>
  );
}
