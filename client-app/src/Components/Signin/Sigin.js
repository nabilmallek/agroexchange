import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../Js/Actions/user'
import { useHistory } from 'react-router'
import './Sigin.css'



const Sigin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  
  return (
      <div className="sign">


      <div className="land">

        <h1>Welcome to <span style={{color:"white",backgroundColor:"rgb(21,21,69)",fontSize:"3em"}}>agro</span><span style={{color:"white",fontSize:"3em"}}>Exchange</span></h1>

      </div>
       <div className="loginbox" onSubmit={
         (e)=> e.preventDefault()
       }>
      
      <h1>Sign In</h1>
      <form>
        
        <label>email</label>
        <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <label>password</label>
        <input type="password" placeholder="Enter Password"  onChange= {(e)=>setPassword(e.target.value)} />
        <input type="submit" defaultValue="Sign In" onClick={()=>dispatch(loginUser({email,password},history))}/>
        <span>you dont have account ? <Link to="/signup">Sign up</Link></span>
      </form>
    </div>
    
    </div>
    )
}

export default Sigin
