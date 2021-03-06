import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to='/'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='logo' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='headerRight d-flex'>
        <li className='mr-30 cu-p' onClick={props.onClickCart}>
          <img width={18} src='/img/cart.png' alt='cart' />
          <span>1250 руб.</span>
        </li>
        <li className='mr-20 cu-p'>
          <Link to='/favorites'>
            <img width={18} src='/img/heart.png' alt='bookMark' />
          </Link>
        </li>
        <li>
          <img width={18} src='/img/user.png' alt='user' />
        </li>
      </ul>
    </header>
  );
}
