import axios from 'axios'
import React, { useState } from 'react'
import './contact.css'



const Contact = () => {


  const [call, setcall] = useState({

    name:"",
    email:"",
    textarea:""
   })
const Addhandle=()=>{
  axios.post("/calls",call)
}
  
    return (
      <div className="contact-us">
      <div className="welc">
      <h1>Welcome to <span style={{color:"white",backgroundColor:"rgb(21,21,69)",fontSize:"3em"}}>agro</span><span style={{color:"white",fontSize:"3em"}}>Exchange</span></h1>
      </div>
      
      
      <form className="form" >
      

      <label>Name</label>
      <input placeholder="your name" onChange={(e)=>setcall({...call,name:e.target.value})}/>

      <label>Email</label>
      <input placeholder="your email"  onChange={(e)=>setcall({...call,email:e.target.value})}/>

      <label>Message</label>
      <textarea placeholder="Message"  onChange={(e)=>setcall({...call,textarea:e.target.value})}></textarea>

      <button onClick={Addhandle}>Send</button>
    </form>
    </div>
        )
}

export default Contact
