import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
 

function App() {
  const objeto = {
   grupo: 'octavo A informatica',
   day: 'lunes'
  }

  const saludo = (g) => {
    alert('excelente dia ' + g)
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings groupInfo={objeto} funcion ={saludo}/>
        

      </header>
    </div>
  );
}

export default App;
