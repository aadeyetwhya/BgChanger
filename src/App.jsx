import { useState } from 'react'

import './App.css'
import ColorCard from './Components/ColorCard';

function App() {
  const [color,setColor]=useState('olive')
  function changeBackground(bgColor){
    setColor(bgColor)
  }
  
  return (
    <div className="wholePage" style={{backgroundColor:color}}>

    <div className="lastLine">
      <ColorCard title="Red" bgColor="red" changeBackground={changeBackground}/>
      <ColorCard title="white" bgColor="white" changeBackground={changeBackground}/>
      <ColorCard title="yellow" bgColor="yellow" changeBackground={changeBackground}/>
      <ColorCard title="blue" bgColor="blue" changeBackground={changeBackground}/>
      <ColorCard title="green" bgColor="green" changeBackground={changeBackground}/>
    </div>

    </div>
  )
}

export default App
