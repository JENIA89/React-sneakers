import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [changeValue, setSearch] = useState('');
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  useEffect(() => {
    axios
      .get('https://61111705c38a0900171f1007.mockapi.io/items')
      .then((res) => setItems(res.data));

    axios
      .get('https://61111705c38a0900171f1007.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
  }, []);

  const onChangeValue = (e) => {
    setSearch(e.target.value);
  };

  const searchValue = (arr) =>
    arr.filter((item) =>
      item.title.toLowerCase().includes(changeValue.toLowerCase())
    );

  const onAddToCart = (obj) => {
    axios.post('https://61111705c38a0900171f1007.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://61111705c38a0900171f1007.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='wrapper clear'>
      {isOpenedCart && (
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onClose={() => setIsOpenedCart(false)}
        />
      )}
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
              onAdd={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
