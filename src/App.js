import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [changeValue, setChangeValue] = useState('');
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        'https://61111705c38a0900171f1007.mockapi.io/items'
      );
      const itemsCartResponse = await axios.get(
        'https://61111705c38a0900171f1007.mockapi.io/cart'
      );
      const itemsFavoriteResponse = await axios.get(
        'https://61111705c38a0900171f1007.mockapi.io/favorites'
      );
      setIsLoading(false);
      setCartItems(itemsCartResponse.data);
      setFavorites(itemsFavoriteResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onChangeValue = (e) => {
    setChangeValue(e.target.value);
  };

  const searchValue = (arr) =>
    arr.filter((item) =>
      item.title.toLowerCase().includes(changeValue.toLowerCase())
    );

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://61111705c38a0900171f1007.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://61111705c38a0900171f1007.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.log(error);
      alert('Не удалось добавить в корзину');
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://61111705c38a0900171f1007.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://61111705c38a0900171f1007.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
      alert('Не удалось добавить в фавориты');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61111705c38a0900171f1007.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isAddedToCart = (id) => cartItems.some((obj) => +obj.id === +id);

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        isAddedToCart,
        setIsOpenedCart,
        setCartItems,
      }}
    >
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
            cartItems={cartItems}
            isLoading={isLoading}
          />
        </Route>
        <Route path='/favorites' exact>
          <Favorites onAddToFavorites={onAddToFavorites} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
