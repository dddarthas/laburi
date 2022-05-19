
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
    speciality:"RM",
  },
  {
    firstName: "Rusnac",
    secondName:"Sandu",
    gender:"male",
    age:13,
    height:30,
    univerity: "Hogwarts",
    speciality:"Slytherin",

  },
  {
    firstName: "Jimbei",
    secondName:"Alexandru",
    gender:"male",
    age:22,
    height:180,
    univerity: "UTM",
    speciality:"RM",
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
