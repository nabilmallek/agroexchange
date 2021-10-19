import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import "./navbar.css"
import Filter from '../filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Js/Actions/user'




const NavBar = () => {

    const dispatch = useDispatch()
    const history=useHistory()
    const user = useSelector(state => state.users.user)
    const isAuth=localStorage.getItem("token")
    return (
        <div className="navigation">
            <img style={{height:"50px"}} src="/images/logoNavbar.png" alt="logo"/>

               <Filter/>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                {!isAuth?<li><Link to="/signin" className="active">Signin</Link></li>:<li onClick={()=>{dispatch(logout());history.push("/");window.location.reload()}}> <Link className="active" to ="/">Logout</Link></li>}
               
                 {user?.isAdmin ?<li><Link to="/dashbord" className="active">dashboard</Link></li>
:null}



            </ul>
        </div>
    )
}

export default NavBar
