// import { useState } from 'react'
import './App.less'
import { DpIcon } from '@components/DpIcon';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Hello world</h1>

      <DpIcon
        name="qr_24"
        size={24}
      />
    </>
  )
}

export default App
