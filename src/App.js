import React from 'react';
import Mustache from 'mustache';
import logo from './logo.svg';
import './App.css';
import BaseTemplate from './BaseTemplate';
import { SkillData } from './BaseTemplate';

var ReactDOM = require('react-dom');



function App() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  var templateFromUrl = params.get('template');
  var readonly = params.get('readonly');

    if (readonly) {
      return (
        <div className="App">
          <header className="App-header" >
          <BaseTemplate code={templateFromUrl}/>
          </header>
        </div >
      );
    }else{
      return(
      <div className="App">
      <header className="App-header" >
        <p>
          Template Code
          <br></br>
          <input id="template" type="text" onChange={handleChange} />
          <br></br>
          <button onClick={handleClick} id="template-process">Generate</button>
        </p>
        <BaseTemplate code={templateFromUrl}/>
      </header>
    </div>
      );
    }
  
}

var templateCodeInput = "";
export default App;
function handleChange(e) {
  templateCodeInput = e.target.value;
  console.log(templateCodeInput);
}

function handleClick() {
  document.getElementById('skillbar').innerHTML = SkillData(templateCodeInput);
  
}