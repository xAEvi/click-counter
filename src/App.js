import './App.css';
import mouselogo from './images/mouselogo.png';
import Button from './components/Button'
import Counter from './components/Counter'
import { useState } from 'react';

function App() {

  const [clickCount, setClickCount] = useState(0);

  const addCounter = () => {
    setClickCount(clickCount + 1)
  };

  const resetCounter = () => {
    setClickCount(0)
  };

  return (
    <div className="App">
      <div className='mouse-logo-container'>
        <h1>Click Counter</h1>
        <img 
          className='mouse-logo'
          alt='Mouse logo'
          src={mouselogo}/>
      </div>
      <div className='principal-container'>
        <Counter numClicks={clickCount} />
        <Button 
          text='Click'
          isClickButton={true}
          handleClick={addCounter}/>
        <Button 
          text='Reset'
          isClickButton={false}
          handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
