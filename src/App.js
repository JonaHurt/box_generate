import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { Box } from './components/Box';
function App() {
  const divs = {
    bgcolor: "",
    heightdiv: "",
    widthdiv:"",
  }
  const [color, setColor] = useState(divs)
  const [list, setList] = useState([])
  const {bgcolor} = color
  const changeColor = (e) =>{
    setColor({...color,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setList([...list,color])
  }
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>ingresa Un color</h3>
        <div class="input-group col-2 mb-3">
          <label for="color"> Color </label>
          <input id="color" required  type="color" name="bgcolor" onChange={changeColor}/>
        </div>
        <div class="input-group mb-3">
          <label for="alto"> alto </label>
          <input id="alto" required className="form-control" type="number" name="heightdiv" onChange={changeColor}/>
        </div>
        <div class="input-group mb-3">
          <label for="ancho"> Ancho </label>
          <input id="ancho" required className="form-control" type="number" name="widthdiv" onChange={changeColor}/>
        </div>
        <button id="" className="btn btn-primary btn-sm" type="submit">Submit</button>
      </form>
      <Box div={list} />
    </div>
  );
}

export default App;
