import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import { nanoid } from "nanoid"

function App() {
  function getDieNumbers() {
    let numArray = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      numArray.push({ value: randomNumber, isHeld: true, id: nanoid() })
    }
    return numArray
    // Another way to write the content of this function
    /* 
      return new Array(10)
         .fill(0)
          .map(() => Math.ceil(Math.random() * 6)) 
      */
  }

  const [dice, setDice] = useState(getDieNumbers())
  const dieNumbers = dice.map((die, index) => <Die key={nanoid()} value={die.value} isHeld={die.isHeld} />)

  function handleDice() {
    setDice(getDieNumbers())
  }

  return (

    <>
      <main>
        <div className='big-container'>
          <div className='small-container'>
            <div className='dice-container'>
              {dieNumbers}
            </div>
            <button className='big-button' onClick={handleDice}>Roll Dice</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
