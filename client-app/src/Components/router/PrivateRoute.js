import React from 'react'
import {Route,Redirect} from 'react-router-dom'


const PrivateRoute = ({component:Component,...Rest}) => {
    const isAuth = localStorage.getItem("token")
    if(isAuth){
     return   <Route component = {Component} {...Rest}/>
    }
    return <Redirect path="/"/>

    
}

export default PrivateRoute
