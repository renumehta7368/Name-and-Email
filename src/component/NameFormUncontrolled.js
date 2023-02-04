//useRef
import {useRef} from "react"
export default function NameFormUncontrolled(){
    const  inputRef = useRef('')
    const handleSubmit = ()=> {
        alert (`the name is ${inputRef.current. value}`)
    }
    return(
        <form onSubmit= {handleSubmit}>
             <lable>
               <input ref={inputRef} type='text'/>
           </lable>
          <input type ='submit' />
      </form>
    
    )

}





//import React , { Component } from "react";

//export default class NameFormUncontrolled extends Component{
   // constructor (props) {
       // super(props)
        //ref use in react same as document.getelement se in dom
        //this.inputRef = React.createRef()
       // this.lableRef =React.createRef()
    //}
   // handleSubmit =(e) => {
       // e.preventDefault()
       // alert(`The name is ${this.inputRef.current.value
       // }`)
  //  }
    // render(){
       // console.log (this.inputRef)
       // return(
       // <form onSubmit ={this.handleSubmit}>
        //    <lable>
            //    <input ref={this.inputRef} type='text'/>
           // </lable>
          //  <input type ='submit' />
      //  </form>
        
      //  )}
//}
