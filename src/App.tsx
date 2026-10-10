// import { useState } from 'react'
import './App.less'
import { DpIcon } from '@components/DpIcon';
import { DpButton } from '@components/DpButton';
import { DpInlineButton } from '@components/DpInlineButton';

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
        <DpInlineButton
          iconEnd='qr_24'
          appearance='bezeled'
          onClick={handleClick}
        >
          test
        </DpInlineButton>

        <DpInlineButton
          iconStart='qr_24'
          appearance='plain'
          onClick={handleClick}
        >
          test
        </DpInlineButton>

        <DpInlineButton
          iconStart='close'
          appearance='gray'
          onClick={handleClick}
        >
          test
        </DpInlineButton>
      </div>
    </>
  )
}

export default App
