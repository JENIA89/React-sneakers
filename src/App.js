import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  useEffect(() => {
    axios
      .get('https://61111705c38a0900171f1007.mockapi.io/items')
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className='wrapper clear'>
      {isOpenedCart && <Drawer onClose={() => setIsOpenedCart(false)} />}
      <Header onClickCart={() => setIsOpenedCart(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block'>
            <img src='/img/search.png' alt='search' />
            <input type='text' placeholder='поиск' />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {items.map((item, i) => (
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
