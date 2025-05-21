import { useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  function getRandomNumber() {
    let numArray = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      numArray.push(randomNumber)
    }
    return numArray
  }
  const dieArray = getRandomNumber()
  return (

    <>
      <main>
        <div className='big-container'>
          <div className='small-container'>
            <div className='dice-container'>
              {dieArray.map((dieNum, index) => <Die key={index} value={dieNum} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
