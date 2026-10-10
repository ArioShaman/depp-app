// import { useState } from 'react'
import './App.less'
import { DpIcon } from '@components/DpIcon';
import { DpButton } from '@components/DpButton';

function App() {
  // const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <h1 className='title'>Hello world</h1>

      <DpIcon
        name="qr_24"
      />

      <div className="buttons">
        <DpButton
          size='l'
          iconStart='qr_24'
          iconEnd='mic_24'
          appearance='bezeled'
          onClick={handleClick}
        >
          Сохранить
        </DpButton>

        <DpButton
          size='l'
          iconStart='qr_24'
          iconEnd='mic_24'
          appearance='plain'
          onClick={handleClick}
        >
          Сохранить
        </DpButton>

        <DpButton
          size='l'
          iconStart='qr_24'
          iconEnd='mic_24'
          appearance='gray'
          onClick={handleClick}
        >
          Сохранить
        </DpButton>
      </div>
    </>
  )
}

export default App
