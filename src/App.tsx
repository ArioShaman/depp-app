// import { useState } from 'react'
import { DpAvatar, DpStackedAvatar } from '@components/DpAvatar';
import './App.less'

function App() {
  // const [count, setCount] = useState(0)
  // const handleClick = () => {
  //   console.log('clicked');
  // };

  return (
    <>
      <h1 className='title'>Hello world</h1>

      <DpStackedAvatar
        size={40}
        limit={6}
        spacing={8}
      >
        <DpAvatar
          src='https://avatars.githubusercontent.com/u/16825894?v=4'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-2.webp'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-1.webp'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-3.webp'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-4.webp'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-5.webp'
        >
          Даниил Матвеев
        </DpAvatar>
        <DpAvatar
          src='https://transitions.dev/assets/avatars/avatar-6.webp'
        >
          Даниил Матвеев
        </DpAvatar>
      </DpStackedAvatar>
    </>
  )
}

export default App
