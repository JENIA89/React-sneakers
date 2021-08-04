import styles from './Card.module.scss';

export default function Card(props) {
  const onClickButton = () => {
    alert(props.price);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src='/img/unlike-heart.svg' alt='leke' />
      </div>
      <img width={133} height={112} src='/img/sneakers/1.jpg' alt='' />
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price}руб.</b>
        </div>
        <button className='button' onClick={onClickButton}>
          <img width={11} height={11} src='/img/plus.svg' alt='plus' />
        </button>
      </div>
    </div>
  );
}
