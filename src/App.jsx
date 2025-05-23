import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = useState(getDieNumbers())

  function getDieNumbers() {
    let numArray = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      numArray.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid()
      })
    }
    return numArray
    // Another way to write the content of this function
    /* 
      return new Array(10)
         .fill(0)
          .map(() => Math.ceil(Math.random() * 6)) 
      */
  }

  function handleDice() {
    setDice(prevDiceValues => prevDiceValues.map(actualDie => ({
      ...actualDie,
      value: actualDie.isHeld === false ? Math.ceil(Math.random() * 6) : actualDie.value
    })))
  }

  function hold(id) {
    console.log(id)

    setDice(prevDice => prevDice.map(eachDie => ({
      ...eachDie,
      isHeld: id === eachDie.id ? !eachDie.isHeld : eachDie.isHeld
    })))
  }

  const dieInstances = dice.map((die, index) => (
    <Die id={die.id} key={die.id} value={die.value} isHeld={die.isHeld} holdFunction={hold} />
  ))



  return (

    <>
      <main>
        <div className='big-container'>
          <div className='small-container'>
            <div className='dice-container'>
              {dieInstances}
            </div>
            <button className='big-button' onClick={handleDice}>Roll Dice</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
