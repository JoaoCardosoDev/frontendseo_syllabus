import Counter from './components/counter'
import Card from './components/card'
import Relogio from './components/relogio'
import './App.css'

function App() {


  return (
    <>
    <div className="container">
      <Card><Counter/></Card>
      <Card><Relogio/></Card>
    </div>
    </>
    
  )
}

export default App
