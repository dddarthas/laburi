
import React from 'react';
import './App.css';
import Layout_content from "./components/Layout"
import {StudenOverview} from "./components/Overview"


const infoStudent = [
  {
    firstName: "Focsa",
    secondName:"Daniel",
    gender:"male",
    age:21,
    height:200,
    univerity: "UTM",
    speciality:"Robotics snd Mecatronics",
  },
  {
    firstName: "Popov",
    secondName:"Madalina",
    gender:"famle",
    age:21,
    height:200,
    univerity: "UK",
    speciality:"Vegetables",

  },
  {
    firstName: "Babei",
    secondName:"Vadim",
    gender:"male",
    age:22,
    height:200,
    univerity: "USM",
    speciality:"Tehnologia Informatie",
  }
]

function App() {
  return (
    <div className="App">
        <Layout_content
        />
        <StudenOverview 
        students = {infoStudent}
        />
    </div>
  );
}

export default App;
