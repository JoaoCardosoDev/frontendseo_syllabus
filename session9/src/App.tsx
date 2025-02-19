import './App.css'
import ThemeButton from './components/ThemeButton'
import ThemeContext from './components/ThemeContext'

function App() {

  return (
    <>
    <ThemeContext>
      <ThemeButton></ThemeButton>
    </ThemeContext>
    </>
  )
}

export default App
