import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block'>
            <img src='/img/search.png' alt='search' />
            <input type='text' placeholder='поиск' />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
