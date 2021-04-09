import React from 'react'
import "./landing.css"
import vid1 from '../../assets/vid1.mp4'

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

            </div>
        </div>
    )
}

export default Landing
