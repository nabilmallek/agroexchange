import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import "./postCard.css"
const PostCard = ({post}) => {

  const user = useSelector(state => state.users.user)
    
  const handleDelete=async()=>{
    try {
      await axios.delete(`/postes/${post._id}`)
    } catch (error) {
      console.log(error)
    }
  }

    return (
        <div className="postcard">
            <img src={post.image} alt={post.product}/>
          <div className="post-body">  
          {user?.isAdmin ?          <button onClick={()=>{
            handleDelete();
            window.location.reload()
          }}>delete</button>

:null}

          <div className="block"><label> Product :</label>
            <p>{post.product}</p></div>
          <div className="block">

          <label>Quantity :</label>
            <p>{post.quantity}</p>
          </div>
          <div className="block">

          <label>Country :</label>
            <p>{post.country}</p>
          </div>
            
            <div className="block"> <label>Email :</label>
            <p>{post.email}</p></div>
           <div className="block">
           <label>Phone :</label>
            <p>{post.phone}</p>
           </div>
           <div className="block">
           <label>Anounncement :</label>
            <p> {post.announcement} </p>
            
           </div>
           
            </div>
        </div>
    )
}

export default PostCard
