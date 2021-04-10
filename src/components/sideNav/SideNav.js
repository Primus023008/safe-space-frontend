import React from 'react'
import './sideNav.css'
import { NavLink } from "react-router-dom";

const SideNav = (props) => {

    const logoutHandler =  () => {
        console.log('logout handler here')
    }
    return (
        <>
        <div className='main-container'>
            <div className='nav-cont'>
                <div className='nav-box'>
                <NavLink exact to="/account" className='nav-icon' activeClassName='nav-icon-active'>
                    <i class="fa fa-user" aria-hidden="true"></i>
                </NavLink>
                <NavLink exact to="/" className='nav-icon' activeClassName='nav-icon-active'>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </NavLink>
                <NavLink exact to="/discover" className='nav-icon' activeClassName='nav-icon-active'>
                    <i class="fa fa-heartbeat"></i>
                </NavLink>
                    <i onClick={logoutHandler} class="fa fa-sign-out signout" aria-hidden="true"></i>
                </div>
            </div>
            
                <div className='body-cont'>
                    {props.children}
                </div>
            
        </div>
        
        </>
    )
}

export default SideNav
