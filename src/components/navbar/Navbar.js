import React from 'react'
import "./navbar.css"
import logo from '../../assets/Logo1.png'

const Navbar = () => {
    return (
        <div className="navtop">
            <a href='/'>Collaborate</a>
            <a href='/'>About</a>
            <a href='/'>Home</a>
            <div className="footerlogo">
                <img className='hide-logo' alt='logo' src={logo}/>
            </div>
        </div>
    )
}

export default Navbar
