import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greetings from './components/Greetings'
 

function App() {
  const [stateClass, setStateClass] = useState(true)
  const [contar, setContar] = useState(0)
  useEffect(() => {
console.log('Total: ' + contar)
  }, [contar])
  
//   const objeto = {
//    grupo: 'octavo A informatica',
//    day: 'lunes'
//   }

//   const saludo = (d, g) => {
//     //alert('excelente ' + d + ' ' + g)//
//       alert(`excelente  ${d} ${g}`)

// }


const iniciarTerminar = () => {
  // console.log('Iniciar / Terminar') 
  setStateClass(!stateClass)
  setContar(contar + 1)
}
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    {/* <Greetings groupInfo={objeto} funcion ={saludo} />  */}
    <h2> la clase ha {stateClass?'Iniciado':'Terminado'} </h2>
    <h3>Clicks: {contar}  </h3>
    <button onClick={iniciarTerminar}>Iniciar/Terminar</button>

      </header>
    </div>
  );
}

export default App;
