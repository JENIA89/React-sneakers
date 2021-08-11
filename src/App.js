import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [changeValue, setSearch] = useState('');
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  useEffect(() => {
    axios
      .get('https://61111705c38a0900171f1007.mockapi.io/items')
      .then((res) => setItems(res.data));
  }, []);

  const onChangeValue = (e) => {
    setSearch(e.target.value);
  };

  const searchValue = (arr) =>
    arr.filter((item) =>
      item.title.toLowerCase().includes(changeValue.toLowerCase())
    );

  return (
    <div className='wrapper clear'>
      {isOpenedCart && <Drawer onClose={() => setIsOpenedCart(false)} />}
      <Header onClickCart={() => setIsOpenedCart(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>
            {changeValue ? `Поиск по запросу: ${changeValue}` : 'Все кроссовки'}
          </h1>
          <div className='search-block'>
            <img src='/img/search.png' alt='search' />
            <img
              onClick={() => setSearch('')}
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
        <div className='d-flex flex-wrap'>
          {searchValue(items).map((item, i) => (
            <Card
              key={i}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('нажали like')}
              onAdd={() => console.log('нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
