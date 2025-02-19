
import { useCallback, useState } from 'react'
import './App.css'
import LifeCicleTest from './components/LifeCicleTest'
import HeavyCalc from './components/HeavyCalc'
import FilteredList from './components/filteredList'
import CallbackFunction from './components/CallbackFunction'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'

const list = ["Zé Tó", "Luis Serra", "Maria Antónia", "Jacinto Ferreira"]

const Roll = ({ rollDice }) => {
  return <button onClick={rollDice}>Roll the dice</button>;
};

function App() {
  const [show, setShow] = useState(true)
  const [filter, setFilter] = useState("")
  const [diceResult, setDiceResult] = useState<null|number>(null)

  const rollDice = useCallback(
    () => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceResult(randomNumber)
    }, []
  )

  function handleChange(e: any) {
    setFilter(e.target.value)
  }
  return (
    <>
      <div>
        <h2>Dice Result: {diceResult}</h2>
        <Roll rollDice={rollDice} />
      </div>
      <br /><br /><br />
      {show && <LifeCicleTest />}
      <button onClick={() => {setShow(!show)}}>Toggle</button>
      <br /><br /><br />
      <HeavyCalc/>
      <br /><br /><br />
      <FilteredList list= {list} filter= {filter}/>
      <input onChange={handleChange} />
      <br /><br /><br />
      <CallbackFunction/>
      <br /><br /><br />
      <InputFocus />
      <br /><br /><br />
      <Counter />
    </>
  )
}

export default App
