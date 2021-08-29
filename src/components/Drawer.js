export default function Drawer({ onRemove, onClose, items = [] }) {
  const removeItem = (id) => {
    onRemove(id);
  };
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex align-center justify-between'>
          Корзина
          <img
            onClick={onClose}
            className='removeBtn cu-p'
            src='/img/btn-remove.svg'
            alt='remove'
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className='items'>
              {items.map((item) => (
                <div
                  key={item.id}
                  className='cartItem d-flex align-center mb-20'
                >
                  <img
                    className='mr-15'
                    width={70}
                    height={70}
                    src={item.imageUrl}
                    alt='sneaker'
                  />
                  <div className='mr-15'>
                    <p className='mb-5'>{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    className='removeBtn'
                    src='/img/btn-remove.svg'
                    alt='remove'
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              ))}
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
        ) : (
          <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
            <img
              className='mb-20'
              width={120}
              height={120}
              src='/img/cart-empty.png'
              alt='cart'
            />
            <h2>Корзина пустая</h2>
            <p className='opacity-6'>
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
            </p>
            <button className='greenButton' onClick={onClose}>
              <img src='/img/arrow.png' alt='arrow' />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
