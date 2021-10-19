import { LOAD_USER,REGISTER_USER,LOGIN_USER,FAIL_USER,LOGOUT_USER, CURRENT_USER, FILTER } from "../Const/user"


const intialState ={
    user:null,
    loadUser:false,
    errors:null,
    isAuth:false,
    filter:""
}

export const userReducer =(state=intialState,{type,payload})=>{
    switch (type){ 
    case REGISTER_USER:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,user:payload.user,isAuth:true}
    case LOGIN_USER:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,user:payload.user,isAuth:true}
    case LOAD_USER:
        return {...state,loadUser:true}
        case CURRENT_USER:
        return {...state,loadUser:false,isAuth:true,user:payload}
    case FAIL_USER :
         return {...state,loadUser:false,errors:payload}
    case LOGOUT_USER:
        localStorage.removeItem("token")
        return {
            user:null,
    loadUser:false,
    errors:null,
    isAuth:false,
        }
        case FILTER:
            return {...state,filter:payload}
    default :
    return   state
    }
}