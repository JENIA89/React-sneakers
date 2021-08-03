export default function Drawer() {
  return (
    <div style={{ display: 'none' }} className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex align-center justify-between'>
          Корзина
          <img
            className='removeBtn cu-p'
            src='/img/btn-remove.svg'
            alt='remove'
          />
        </h2>

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
            <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
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
            <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
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
  );
}
