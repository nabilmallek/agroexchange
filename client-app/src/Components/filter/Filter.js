import React from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../../Js/Actions/user'
import "./search.css"
const Filter = ({text,settext}) => {
    const dispatch = useDispatch()
    return (
        <div>
        <div className="box">
            <input placeholder="search for a proudct ..." type="text" onChange={(e)=>dispatch(filter(e.target.value))}/>
            <button>search</button>
        </div>
    </div>
    )
}

export default Filter
