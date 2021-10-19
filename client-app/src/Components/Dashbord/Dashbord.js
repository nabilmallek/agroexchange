import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router'
import { current, logout } from '../../Js/Actions/user'

import './dashboard.css'

const Dashbord = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [calls, setcalls] = useState([]);
    const [posts, setposts] = useState([]);
    const [users, setusers] = useState([]);




    useEffect(() => {
        try {
            dispatch(current())

            axios.get("/calls").then((res)=>setcalls(res.data.responsed))
            axios.get("/postes").then((res)=>setposts(res.data.responsed))
            axios.get("/user").then((res)=>setusers(res.data))



        } catch (error) {
            console.log(error)
        }
    }, []);
    
    return (
        <div className="dash">
         <div className="dash-info">
         <div className="dash-card">
             <h2>Users: {users?.length}</h2>
         </div>
          <div className="dash-card">
          <h2>posts: {posts?.length}</h2>


          </div>
         </div>
         
         <div className="dash-call">
            {calls?.map((el)=>(
                <div className="call-row">
                    <h3>{el.name}</h3>
                    <h3>{el.email}</h3>
                    <h3>{el.textarea}</h3>

                </div>
            ))}

         </div>
         <button >logout</button>   

        </div>
    )
}

export default Dashbord
