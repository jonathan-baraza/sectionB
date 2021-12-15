
import './App.css';
import ButtonA from './components/ButtonA';
import ButtonB from './components/ButtonB';
import ButtonC from './components/ButtonC';
import {useState} from "react";

function App() {
  const [value,setValue]=useState(0);

  const addByOne=()=>{
    setValue(value+1);
  }
   const addByTen=()=>{
    setValue(value+10);
  }
   const addByHundred=()=>{
    setValue(value+100);
  }
  return (
    <div className="App">
      <h2>State value: {value}</h2>
      <ButtonA clicked={addByOne}/>
      <ButtonB clicked={addByTen}/>
      <ButtonC clicked={addByHundred}/>
    </div>
  );
}

export default App;
