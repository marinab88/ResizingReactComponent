import { useState } from 'react'

import './dynamicBox.css'

const DynamicBox = ({size, color}) => {

  const [square, setSquare] = useState(size)
  const [squareColor, setSquareColor] = useState(color)

  const decreaseSize = () => {
    setSquare(prevSize => prevSize - 10)
  } 

  const increaseSize = () => {
    setSquare(prevSize => prevSize + 10)
  } 

  const changeColor = (e) => {
    setSquareColor(e.target.value)
  }

  return (
    <div>
      <input type='color' onChange={changeColor}/>
      <div style={{width: `${square}px`, height: `${square}px`, backgroundColor: `${squareColor}`}}></div>
      <button onClick={decreaseSize}>-</button>
      <button onClick={increaseSize}>+</button>
    </div>
  )
}
 export default DynamicBox;