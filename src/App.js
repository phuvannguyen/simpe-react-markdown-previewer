import './App.css';
import React, { useState } from 'react';
import Editor from "./component/editor"
import Preview from "./component/preview" 
function App() {
  const [value, setValue] = useState("");

const handleOnChange = (e) => {
  setValue(e.target.value)

}
  return (
    <div className="App">
      <Editor  handleOnChange={handleOnChange}/>
      <Preview value={value}/>

        
    

    
    </div>
  );
}

export default App;
