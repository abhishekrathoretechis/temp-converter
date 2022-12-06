import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState()
  const [result1, setResult1] = useState()
  const [result2, setResult2] = useState()
  const kelvin =() => {

    setResult1((input)*(1)  + 273)
  }
  const fahrenhite = () =>{
    setResult2((input)* (9/5) + 32)
  }
  const clear =()=> {
    setInput("")
    setResult1("")
    setResult2("")
  }

  // const clear = () => {
    
  // }

  // function handleChange(e){
  //   const {name,value} = e.target;

  //   console.log(name,value);
  // }

  return (
    <div className="App">
    <div className='celcius'>
    <h1>Celcius</h1>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
    </div>
    
    <div className='kelvin'>
    <button onClick={kelvin}>kelvin</button>
    <input type="text" value={result1}></input>
    </div>
    <div className='fah'>
    <button onClick={fahrenhite}>Fahrenhite</button>
    <input type="text" value={result2}></input>
    </div>  
    <button onClick={clear}>clear</button>
    </div>
  );
}

export default App;
