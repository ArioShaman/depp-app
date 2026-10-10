// import { useState } from 'react'
import { DpAvatar } from '@components/DpAvatar';
import './App.less'

function App() {
  // const [count, setCount] = useState(0)
  // const handleClick = () => {
  //   console.log('clicked');
  // };

  return (
    <>
      <h1 className='title'>Hello world</h1>

      <DpAvatar
        src='https://avatars.githubusercontent.com/u/16825894?v=4'
        size={96}
      >
        Даниил Матвеев
      </DpAvatar>
    </>
  )
}

export default App
