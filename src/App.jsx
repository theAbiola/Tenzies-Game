import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {
  //Notice how we now have an arrow function that returns the call to the getDieNumbers() function.
  //This is to help us prevent React from calling the getNumbers() function on every re-render of our App component
  const [dice, setDice] = useState(() => getDieNumbers())

  function getDieNumbers() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      diceArray.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid()
      })
    }
    return diceArray
    // Another way to write the content of this function
    /* 
      return new Array(10)
         .fill(0)
          .map(() => Math.ceil(Math.random() * 6)) 
      */
  }

  function rollDice() {
    setDice(prevDiceValues => prevDiceValues.map(die => ({
      ...die,
      value: die.isHeld === false ? Math.ceil(Math.random() * 6) : die.value,
    })))
  }

  function holdDice(id) {
    console.log(id)

    setDice(prevDice => prevDice.map(die => ({
      ...die,
      isHeld: id === die.id ? !die.isHeld : die.isHeld
    })))
  }

  let gameWon =
    dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

  const dieInstances = dice.map((die, index) => (
    <Die id={die.id} key={die.id} value={die.value} isHeld={die.isHeld} holdFunction={holdDice} />
  ))

  function newGame() {
    setDice(prevDice => prevDice.map(die => ({
      ...die,
      value: gameWon && Math.ceil(Math.random() * 6),
      isHeld: gameWon && false,
    })))
  }



  return (

    <>
      <main>
        <div className='big-container'>
          <div className='small-container'>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dice-container'>
              {dieInstances}
            </div>
            <button className='big-button' onClick={gameWon ? newGame : rollDice}>{gameWon ? 'New Game' : 'Roll Dice'}</button>
            {gameWon && <Confetti />}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
