import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Encabezado from './components/Header'

var clicks = 0;

function App() {

  const titulo = 'Hola, Coder!'

  function clickear () {
    clicks++;
    console.log(`clicks registrados: ${clicks}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Encabezado nombre='Alejandro' edad='27'/>
      </header>
      <body>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {titulo}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MainContent/>

        <button onClick={clickear()}>Da click aquí</button>
      </body>
    </div>
  );
}

export default App;
