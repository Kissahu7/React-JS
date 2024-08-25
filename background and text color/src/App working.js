//import logo from './logo.svg';
import React, { useRef, useState } from 'react';

import './App.css';

function App() {

  var [inputElement, changeColor] = useState();
  const inputRef = useRef(null);
  const chnageBackgroundColor = () =>{
    const inputVal = inputRef.current.value;
    //alert(inputVal);
    changeColor(  {backgroundColor: inputVal});
    
    inputRef.current.value ='';
  }
//var colorsel =[ 'Red', 'Yellow', 'Violet', 'Orange', 'Green','blue','black' ]; 

  return (
    <div className="App">
      <div className="App-header"style={inputElement} >
      <label>Want to change back ground color ? </label>
      <br/>
      <input type="text" ref={inputRef} placeholder='please input color name'></input>
      <br />
      <input type="submit" id="mybutton" onClick={chnageBackgroundColor}></input>
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
