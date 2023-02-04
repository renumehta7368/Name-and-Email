import React, {useState} from "react"

//function component
function NameFormControlled(){
      // const [name, setName] = useState('')    
       //const [email, setEmail] = useState('')  
       const[user,setUser] = useState({
         name:'',
         email:''
       })
       const handleChange =(e) => {
         if(e.target.name =='name'){
            setUser((user) =>( {...user, name:e.target.value}))
               
            }
         else if (e.target.name =='email'){
            setUser((user) =>( {...user, email:e.target.value}))
               
            }
         }

       
       const handleSubmit = (e) => {
        e.preventDefault()
            alert(`My name is ${user.name} and email is ${user.email}`)
         
       }


    return(
        <form  onSubmit={handleSubmit}>
       
        <lable>
            <input name='name' onChange={handleChange} type ='name' placeholder = "name.." />
        </lable>
        <label>
        <input  name = 'email' onChange={handleChange} type ='email' placeholder = "email.." />
       </label>
       <input type ='submit'></input>
        </form>
    )
}export default NameFormControlled









//import { render } from "@testing-library/react";



//import React from "react";



//export default class NameFormControlled extends React.Component{
   // constructor(props){
      // super(props) 
       //this.state ={
       // name :'',
      //  email:''
      // }
   // }
   // handle
   //NameChane =(event) => { 
   //this.setState({
   // name:event.target.value
    //})
//}
   // handleEmailChange = (event) => {
       // this.setState({
          //  email:event.target.value
            //})
    //}
   // handleChange =(event) => {
      //if(event.target.name  == 'name'){
       // this.setState({
         //   name: event.target.value
        //})
        //if(event.target.name == 'email'){
          //  this.setState({
              //  email: event.target.value
           // })
     // }
    //}
    
  //  handleSubmit =(event) => {
     //   event.preventDefault()
      //  `my name is $alert({this.state.name} and email is ${this.state.email}`)
    //}
    //render(){
      //  return(

       //<form onSubmit ={this.handleSubmit}>
         //  <lable>
            //  <input name='name//' onChange ={this.handleNameChange}
             //  type='text' placeholder="name"/>
         //</lable>
        // <lable>
            //  <input  name='email' onChange ={this.handleEmailChange}
              // type='email' placeholder="email"/>
        // </lable>
           // <input type ='submit' />
     //  </form>
       // )
   // }
   // }//