function App() {
  return (
    <div className='wrapper clear'>
      <div className='overlay'>
        <div className='drawer'>
          <h2>Корзина</h2>

          <div className='items'>
            <div className='cartItem d-flex align-center mb-20'>
              <img
                className='mr-15'
                width={70}
                height={70}
                src='/img/sneakers/1.jpg'
                alt='sneaker'
              />
              <div className='mr-15'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='removeBtn'
                src='/img/btn-remove.svg'
                alt='remove'
              />
            </div>
            <div className='cartItem d-flex align-center'>
              <img
                className='mr-15'
                width={70}
                height={70}
                src='/img/sneakers/1.jpg'
                alt='sneaker'
              />
              <div className='mr-15'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='removeBtn'
                src='/img/btn-remove.svg'
                alt='remove'
              />
            </div>
          </div>

          <div className='cartTotalBlock'>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className='greenButton'>
              Оформить заказ <img src='/img/arrow.png' alt='arrow' />
            </button>
          </div>
        </div>
      </div>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight d-flex'>
          <li className='mr-30 '>
            <img width={18} src='/img/cart.png' />
            <span>1250 руб.</span>
          </li>
          <li>
            <img width={18} src='/img/user.png' />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block'>
            <img src='/img/search.png' alt='search' />
            <input type='text' placeholder='поиск' />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          <div className='card'>
            <div className='favorite'>
              <img src='/img/unlike-heart.svg' alt='leke' />
            </div>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/2.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt='' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
