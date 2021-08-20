import { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({
  id,
  title,
  imageUrl,
  price,
  onAdd,
  onFavorite,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    onAdd({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? '/img/like-heart.svg' : '/img/unlike-heart.svg'}
          alt='like'
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt='sneaker' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
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
