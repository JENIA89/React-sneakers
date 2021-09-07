import React, { useContext } from 'react';
import AppContext from '../context';

export const Info = ({ title, description, img }) => {
  const { setIsOpenedCart } = useContext(AppContext);

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width={120} height={120} src={img} alt='cart' />
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button className='greenButton' onClick={setIsOpenedCart}>
        <img src='/img/arrow.png' alt='arrow' />
        Вернуться назад
      </button>
    </div>
  );
};
