import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Transactions from "./component/Transactions";
import {Users} from "./component/Users";

function App() {
    const [id,setId] = useState(5);
    const [days,setDays] = useState(30);
  return (
    <div className="App">
        <header className = "App-header">

            <Users setId={setId} setDays={setDays}/>
             <Transactions id={id} days={days} />

        </header>
    </div>
  );
}

export default App;
