import React from 'react'
import './journal.css'
import img from '../../assets/Safe Space Illustrations 2.png'

const Journal = () => {
    return (
        <div className="journal">
            <div className="journaltop">
                <img src={img}/>
                <div className="journaltopleft">
                    <p className="h2">My Journal</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget facilisis massa sed nisi. Tincidunt eget ut fermentum, a dignissim mattis. Nulla feugiat duis ipsum neque enim. Quis fermentum faucibus pellentesque eu, convallis dictum in. Maecenas cursus pharetra arcu gravida urna at nullam semper. Facilisis ut non viverra ultricies. </p>
                </div>
            </div>
        </div>
    )
}

export default Journal
