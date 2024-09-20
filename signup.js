import React,{useState} from 'react'
import './Signup.css'
function Signup() {
  const[formData,setFormData]=useState({
  first:'',
  last:'',
  mail:'',
  pass:''})
  const handleInputChange=(event)=>{
  const {name,value} = event.target
  setFormData((prevData)=>({...prevData,[name]:value}))

  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData,"the input is ")
  }
  return (
    <div className='signup-card' >
        <h1>registration form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" >firstname</label> 
          <input type="text" placeholder= "enter your frist name" name="first" value={FormData.first} onChange={(event)=>handleInputChange(event)}/>
          <label htmlFor="" >Lastname</label> 
          <input type="text" placeholder= "enter your l name" name="last" value={FormData.last} onChange={(event)=>handleInputChange(event)}/>
          <label htmlFor="" >email</label> 
          <input type="email" placeholder= "enter your mail" name ="mail" value={FormData.mail} onChange={(event)=>handleInputChange(event)}/>
          <label htmlFor="" >password</label> 
          <input type="password" placeholder= "enter your pass" name="pass" value={FormData.pass} onChange={(event)=>handleInputChange(event)}/>
          <button type="submit">signup</button>
        </form>
    </div>
  )
 }

export default Signup
