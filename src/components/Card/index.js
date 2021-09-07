import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
import styles from './Card.module.scss';

export default function Card({
  id,
  title,
  imageUrl,
  price,
  onAdd,
  onFavorite,
  favorited = false,
  loading,
}) {
  const { isAddedToCart } = useContext(AppContext);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    onAdd({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setFavorite(!isFavorite);
  };

  const renderSkeleton = () => {
    return (
      <ContentLoader
        speed={2}
        width={150}
        height={230}
        viewBox='0 0 150 187'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='-1' y='0' rx='10' ry='10' width='150' height='90' />
        <rect x='0' y='105' rx='3' ry='3' width='150' height='15' />
        <rect x='0' y='130' rx='3' ry='3' width='94' height='15' />
        <rect x='0' y='155' rx='8' ry='8' width='81' height='25' />
        <rect x='118' y='148' rx='8' ry='8' width='32' height='32' />
      </ContentLoader>
    );
  };
  return (
    <div className={styles.card}>
      {loading ? (
        renderSkeleton()
      ) : (
        <>
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
              src={
                isAddedToCart(id)
                  ? '/img/btn-btnchecked.svg'
                  : '/img/btn-btnplus.svg'
              }
              alt='plus'
            />
          </div>
        </>
      )}
    </div>
  );
}
