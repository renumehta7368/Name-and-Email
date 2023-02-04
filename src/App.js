import React from "react";
import './App.css'
import NameFormControlled from "./component/NameFormControlled";
function App(){
  return(
    <div className="app">
    {/*<NameFormUncontrolled />*/}
    <NameFormControlled />
    </div>
  )
}
export default App