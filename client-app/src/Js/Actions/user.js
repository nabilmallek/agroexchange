import { LOAD_USER,REGISTER_USER,LOGIN_USER,FAIL_USER,LOGOUT_USER, CURRENT_USER ,FILTER} from "../Const/user"

import axios from "axios"


export const registerUser =(user,history)=>async (dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
    const result =  await axios.post("/user/register",user)
    
    dispatch({type:REGISTER_USER,payload:result.data})
    history.push("/addpost")
    } catch (error) {
       dispatch ({type:FAIL_USER,payload:error.response.data}) 
    }
}

export const loginUser =(user,history)=>async (dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
    const result =  await axios.post("/user/login",user) 
    dispatch({type:LOGIN_USER,payload:result.data})
    history.push("/addpost")
    window.location.reload()
    } catch (error) {
     
        
       dispatch ({type:FAIL_USER,payload:error.response.data}) 
       console.log(error)
    }
} 

export const current = ()=> async dispatch=>{
    dispatch({type:LOAD_USER})
    const options = {
        headers:{
            authorization :localStorage.getItem("token")
        }
    }
   try {
    let result  =    await axios.get("/user/current",options)
    dispatch ({type:CURRENT_USER,payload:result.data.user})
   } catch (error) {
       
   }
}

export const logout = ()=>{
    return{
        type:LOGOUT_USER
    }
}

export const filter =(text)=>{
return {
    type:FILTER, payload:text
}
}