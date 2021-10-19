import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PostCard from '../postcard/PostCard'
import "./PostList.css"

const PostList = ({filterText}) => {

    const [list, setlist] = useState([])
    const [text, settext] = useState("")
    const listText = useSelector(state => state.users.filter)
    useEffect(() => {
        try {
            const result= axios.get("/postes").then((res)=>setlist(res.data.responsed))
           

        } catch (error) {
            console.log(error)
        }

    }, [])
    list?console.log(list):console.log("nulll")
    return (
        <div>
            
            
<div className="post-list">   


         {filterText?list.filter((el)=>el.product.toLowerCase().includes(filterText.toLowerCase() )).map((el)=>(<PostCard post={el}/>)):list.filter((el)=>el.product.toLowerCase().includes(listText.toLowerCase() )).map((el)=>(<PostCard post={el}/>))}
</div>
        </div>
    )
}

export default PostList
