
import React,{useState} from 'react'
import axios from 'axios'


import './addpostes.css'



const Addpostes = () => {

   const [poste, setpost] = useState({

    image:"",
    product:"",
    quantity:"",
    country:"",
    email:"",
    phone:"",
    announcement:""
   })
const Addhandle=async()=>{
try {
    await axios.post("/postes",poste)

} catch (error) {
    console.log(error)
}}
  
    
    return (
        <div className="pos">
       
        <div className="add">  <span> Add </span> <br/>   <span> postes </span> </div>
        <form className="addpos" onChange={(e)=>{e.preventDefault()}}>
        <label>Image</label>
            <input type="text" placeholder="Enter posterurl" onChange= {(e)=>setpost({...poste,image:e.target.value})} />
            <label>Product</label>
            <input type="text" placeholder="Enter product" onChange= {(e)=>setpost({...poste,product:e.target.value})}/>
            <label>Quantity</label>
            <input type="text" placeholder="Enter quantity"onChange= {(e)=>setpost({...poste,quantity:e.target.value})}/>
            <label>Country</label>
            <input type="text" placeholder="Enter country" onChange= {(e)=>setpost({...poste,country:e.target.value})}/>
            <label>Email</label>
            <input  className="inpu-e"   type="email" placeholder="Enter email" onChange= {(e)=>setpost({...poste,email:e.target.value})} />
            <label>Phone</label>
            <input  className="inpu-e"  type="number" placeholder="Enter phone" onChange= {(e)=>setpost({...poste,phone:e.target.value})}/>
            <label>Announcement</label>
            <input type="text" placeholder="Enter date" onChange= {(e)=>setpost({...poste,announcement:e.target.value})}/>
          <button onClick={Addhandle}>add poste</button>  
        </form>
        
    </div>
)
}

export default Addpostes
