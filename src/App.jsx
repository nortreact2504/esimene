import './App.css'
import Luuletus from './Luuletus'
import logo from './assets/react.svg'

function App() {
  return (
      <div>
          <h1>Luuletus</h1>
          <Luuletus />
          <p>esimene <br/> teine</p>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
  )
}
export default App
