import React from 'react'
import "./landing.css"
import vid1 from '../../assets/vid1.mp4'
import img from '../../assets/Logo1.png'
import Button from '../button/Button.js'
import Login from '../login/Login';
const Landing = () => {
    return (
        <div className='mainlanding'>
            <div className='leftlanding'>
                <div className='video-card'>
                    <video loop autoPlay muted>
                        <source src={vid1} type="video/mp4"/>
                    </video>
                    <div className='vid-card-content'>
                        <Login/>
                    </div>
                </div>
                
            </div>
            <div className='rightlanding hide'>
                <img alt='logo' src={img}/>
                <p id="h1">Your interactive <br/>self-transformation journey</p>
                <p id="sub">An open source initiative by Ishita and Anushrav</p>
                <Button label="Get Started"/>
            </div>
        </div>
    )
}

export default Landing
