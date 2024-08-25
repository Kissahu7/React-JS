import React, { useRef, useState } from 'react';

import './App.css';

function App() {

  var [inputElement, changeColor] = useState();
  const inputRef = useRef(null);
  const chnageBackgroundColor = () =>{
    const inputVal = inputRef.current.value;
    //alert(inputVal);
    const colorsel =['RED','YELLOW', 'VIOLET', 'ORANGE', 'GREEN','BLUE','BLACK'];
    var iscolor = colorsel.includes(inputVal.toUpperCase()) ;
    if (iscolor) {alert(`Want to  change background color to ${inputVal}`);  changeColor(  {backgroundColor: inputVal});}else{alert(`please select valid color: \n${colorsel}` ) };
   
    inputRef.current.value ='';
  }
//var colorsel =[ 'Red', 'Yellow', 'Violet', 'Orange', 'Green','blue','black' ]; 
  return (
    <div className="App">
      <div className="App-header"style={inputElement} >
      <label>Want to change back ground color ? </label>
      <br/>
      <input type="text" ref={inputRef} placeholder='Add Color Name'></input>
      <br />
      <input type="submit" id="mybutton" onClick={chnageBackgroundColor}></input>
      
      </div>
      
    </div>
  );
}
<br />

export default App;
