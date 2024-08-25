//import logo from './logo.svg';
import React, { useRef, useState } from 'react';

import './App.css';

function App() {
 // var mycolor= {backgroundColor: "#282c34"};
  var [inputElement, changeColor] = useState();
//let inputColor ="Red";
var inputRef =useRef(null);
  var chnageBackgroundColor =()=>{
    inputElement = inputRef.current.value;
    console.log(inputElement);
    changeColor( {backgroundColor: inputElement});
  }

  return (
    <div className="App">
      <div className="App-header"style={inputElement} >
      <label>Want to change back ground color ? </label>
      <br/>
      <input type="text" ref={inputRef} value={inputElement} placeholder='please input color name'></input>
      <br />
      <input type="submit" id="mybutton" onClick={()=>chnageBackgroundColor(inputElement)}></input>
      </div>
      
    </div>
  );
}
<br />
/*let  Comp1 = () => {
  return (
     <div>
      <h1>my react </h1>
     </div> 
      

  )
}*/
export default App;
