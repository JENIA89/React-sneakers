import React from 'react';
import { useContext } from 'react';
import Card from '../components/Card';
import AppContext from '../context';

export default function Home({
  cartItems,
  items,
  searchValue,
  onAddToCart,
  changeValue,
  onChangeValue,
  onAddToFavorites,
  setChangeValue,
  isLoading,
}) {
  const { isAddedToCart } = useContext(AppContext);

  const renderCards = () => {
    return (isLoading ? [...Array(8)] : searchValue(items)).map((item, i) => (
      <Card
        key={i}
        onFavorite={(obj) => onAddToFavorites(obj)}
        onAdd={(obj) => onAddToCart(obj)}
        added={isAddedToCart(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>
          {changeValue ? `Поиск по запросу: ${changeValue}` : 'Все кроссовки'}
        </h1>
        <div className='search-block'>
          <img src='/img/search.png' alt='search' />
          <img
            onClick={() => setChangeValue('')}
            className='clear cu-p'
            src='/img/btn-remove.svg'
            alt='remove'
          />
          <input
            onChange={onChangeValue}
            placeholder='поиск'
            value={changeValue}
          />
        </div>
      </div>
      <div className='d-flex flex-wrap'>{renderCards()}</div>
    </div>
  );
}
