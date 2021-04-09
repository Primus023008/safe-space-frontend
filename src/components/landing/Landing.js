import React from 'react'
import "./landing.css"
import vid1 from '../../assets/vid1.mp4'
import img from '../../assets/Logo1.png'
import Button from '../button/Button.js'

const Landing = () => {
    return (
        <div className='mainlanding'>
            <div className='leftlanding'>
                <div className='phone'>
                    <video autoPlay muted>
                        <source src={vid1} type="video/mp4" />
                    </video>

                </div>
            </div>
            <div className='rightlanding'>
                <img src={img}/>
                <p id="h1">Your interactive <br/>self-transformation journey</p>
                <p id="sub">An open source initiative by Ishita Kabra</p>
                <Button label="Get Started"/>
            </div>
        </div>
    )
}

export default Landing
