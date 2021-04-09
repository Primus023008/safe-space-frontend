import React from 'react'
import "./input.css"

const Input = (props) => {
    return (
        <div className="fullinput">
            <input value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder} 
            type={props.type}
            className={props.button?"inputbarsmall":"inputbarbig"}
            />
            {props.button?<button onClick={props.onClick}
            className="editbutton"></button>:null}
        </div>
        
    )
}

export default Input
