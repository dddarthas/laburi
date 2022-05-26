import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';


import { LayoutCos } from './Layouts/LayoutCos'

function App() {
  const [input1, setInput1] = React.useState("")
  const [input2, setInput2] = React.useState("")
  const [input3, setInput3] = React.useState("")
  

  return (
    <div>
      <LayoutCos />
      <input value={input1} onChange={(e) => {setInput1(e.target.value)}} placeholder="Input 1" type="text" id="fname"></input>
      <input value={input2} onChange={(e) => {setInput2(e.target.value)}} placeholder="Input 2"></input>
      <input value={input3} onChange={(e) => {setInput3(e.target.value)}} placeholder="Input 3"></input>
      <p> {input1} </p>
      <button onClick={()=>alert(input1)}>Button 1</button>
      <button onClick={()=>alert(input2)}>Button 2</button>
      <button onClick={()=>alert(input3)}>Button 3</button>
    </div>
  );
}

export default App;
