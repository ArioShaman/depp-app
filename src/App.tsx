// import { useState } from 'react'
import { DpStreamingText } from '@components/DpStreamingText'
import './App.less'

function App() {
  return (
    <>
      <h1 className='title'>Hello world</h1>

      <DpStreamingText>
        Animating mask-position never composites — it repaints the element. And the element being repainted sits inside a displacement chain, so the whole filter re-executes on the CPU each frame. That compounds: it isn't one cost, it's the repaint feeding the filter.
      </DpStreamingText>
    </>
  )
}

export default App
