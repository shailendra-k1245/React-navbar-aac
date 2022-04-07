
import './App.css'
import { Button } from './components/Button';
import { Links } from './components/Links';
import { Logo } from './components/Logo'

function App() {
  const linkArr = ["Services","Projects","About"];

  return (
    <div className='blueBox' >
    <div className="navbar">
      <Logo/>
      <Links arr={linkArr}/>
      <Button/>
    </div>
    </div>
  )
}

export default App
