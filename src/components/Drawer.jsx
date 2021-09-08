import axios from 'axios';
import { useContext, useState } from 'react';
import AppContext from '../context';
import { Info } from './Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onRemove, onClose, items = [] }) {
  const [isOrderComplete, setisOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems } = useContext(AppContext);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://61111705c38a0900171f1007.mockapi.io/orders',
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setisOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://61111705c38a0900171f1007.mockapi.io/cart/${item.id}`,
          item
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа!');
    }
    setIsLoading(false);
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
          <div className='d-flex flex flex-column'>
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
                    onClick={() => onRemove(item.id)}
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className='greenButton'
              >
                Оформить заказ <img src='/img/arrow.png' alt='arrow' />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ ${orderId} передан курьерской службе`
                : 'Добавьте хотя бы одну пару крассовок'
            }
            img={
              isOrderComplete
                ? '/img/complete-order.png'
                : '/img/cart-empty.png'
            }
          />
        )}
      </div>
    </div>
  );
}
