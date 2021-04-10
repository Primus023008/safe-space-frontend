import React from 'react'
import './button.css'

const Button = (props) => {
    return (
        <div>
             <button onClick={props.onClick}
            className={props.className?`${props.className}`:'CTA'}>
            {props.label}
            </button>   
        </div>
    )
}

export default Button
