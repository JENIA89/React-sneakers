import { useState } from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src='/img/unlike-heart.svg' alt='like' />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt='sneaker' />
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          onClick={onClickPlus}
          className={styles.plus}
          src={isAdded ? '/img/btn-btnchecked.svg' : '/img/btn-btnplus.svg'}
          alt='plus'
        />
      </div>
    </div>
  );
}
