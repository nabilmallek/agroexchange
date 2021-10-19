import React,{useState} from 'react'
 import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {registerUser} from '../../Js/Actions/user'
import { useHistory } from 'react-router'
import './Signup.css'



const Signup = () => {
   const [name,setName] = useState("")
   const [lastName,setLastName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const dispatch = useDispatch()
  const history = useHistory()
  
  
  return (
       <div className="sign">


         <div className="land">

           <h1>Welcome to <span style={{color:"white",backgroundColor:"rgb(21,21,69)",fontSize:"3em"}}>agro</span><span style={{color:"white",fontSize:"3em"}}>Exchange</span></h1>

         </div>
          <div className="loginbox">
         
         <h1>Sign up</h1>
         <form>
           <label>name</label>
           <input type="text" placeholder="Enter name" onChange= {(e)=>setName(e.target.value)} />
           <label>last name</label>
           <input type="text" placeholder="Enter lastName" onChange={(e)=>setLastName(e.target.value)} />
           <label>email</label>
           <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
           <label>password</label>
           <input type="password" placeholder="Enter Password"  onChange= {(e)=>setPassword(e.target.value)} />
           <input type="submit" defaultValue="Sign In" onClick={()=>dispatch(registerUser({name,lastName,email,password},history))} />
           <span>you have account ?  <Link to="/signin">Sign in</Link></span>
         </form>
       </div>
       
       </div>
    )
}

export default Signup
