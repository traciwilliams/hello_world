import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';
//import './index.css';

  var person = {
  	personName: "Wanda",
  	personAge: 44,
  	favorites: [
    	"lions",
    	"Tigers",
    	"bears!"
  	]
  }




ReactDOM.render(
  
  //<Hello name={"Traci !!"} age={"none"}/>,
  <Hello
  	name={person.personName}
  	age={person.personAge}
  	animals={person.favorites}
  	/>,	


  document.getElementById('root')
);
