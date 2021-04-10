import React,{ useState } from 'react'
import "./input.css"

const Input = (props) => {
    const [dis, setDis] = useState(true);
    const [pwtype, setPwtype] = useState(props.type);

    const inputClick = () => {
        setDis(!dis);
        if(!dis){
            console.log(props.value);
        }
    }

    const passClick = () => {
        if(pwtype === 'password') setPwtype('text')
        else setPwtype('password')
    }
    return (
        <div className="fullinput">
            <input value={props.value} 
            onChange={props.onChange}
            disabled={
                props.type!=='password'?dis:false
            }
            placeholder={props.placeholder} 
            type={pwtype}
            className={props.button?"inputbarsmall":"inputbarbig"}
            />

            {props.button?
            (
                props.type!=='password'? 
                <button onClick={inputClick}
                className="editbutton">
                   {dis?<i className='fa fa-pencil'></i>:<i className='fa fa-check'></i>}
                </button>:
                 <button onClick={passClick}
                 className="editbutton">
                     {pwtype === 'text'?<i className='fa fa-eye-slash'></i>:<i className='fa fa-eye'></i>}
                 </button>
            )
           :null}
        </div>
        
    )
}

export default Input
