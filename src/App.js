import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [isOpenedCart, setIsOpenedCart] = useState(false);
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
          <Card
            title='Мужские Кроссовки Nike Blazer Mid Suede'
            price='12 999'
            onFavorite={() => console.log('нажали like')}
            onAdd={() => console.log('нажали плюс')}
          />
          <Card
            title='Мужские Кроссовки Nike Air Max 270'
            price='10 999'
            onFavorite={() => console.log('нажали like')}
            onAdd={() => console.log('нажали плюс')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
