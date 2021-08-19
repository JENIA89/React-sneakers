import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [changeValue, setChangeValue] = useState('');
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
    setChangeValue(e.target.value);
  };

  const searchValue = (arr) =>
    arr.filter((item) =>
      item.title.toLowerCase().includes(changeValue.toLowerCase())
    );

  const onAddToCart = (obj) => {
    axios.post('https://61111705c38a0900171f1007.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = (obj) => {
    axios.post('https://61111705c38a0900171f1007.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61111705c38a0900171f1007.mockapi.io/cart/${id}`);
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
      <Route path='/' exact>
        <Home
          items={items}
          changeValue={changeValue}
          onAddToCart={onAddToCart}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
          onAddToFavorites={onAddToFavorites}
          setChangeValue={setChangeValue}
        />
      </Route>
      <Route path='/favorites' exact>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
