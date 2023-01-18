import 'bootstrap/dist/css/bootstrap.min.css'
import MiApi from "./components/MiApi"
import portada from './tt.png'
import Piepagina from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img src={portada} className='portada'/>
      </div>
      <div className='section'>
        <MiApi />
      </div>
      <footer>
        <Piepagina />
      </footer>
    </div>
  )
}

export default App;
