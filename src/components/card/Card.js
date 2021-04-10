import React from 'react'
import Button from '../button/Button'
import './card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='sign'>
                This is a sign that .... <br/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum varius eget enim duis purus. Malesuada in nibh id sed proin. Leo amet, ut hendrerit id amet quam accumsan. Volutpat fermentum scelerisque arcu maecenas. "</p>
            </div>
            <div className='journal'>
                <h2 className='h2'>Make your daily journal entry</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum varius eget enim duis purus. Malesuada in nibh id sed proin. Leo amet, ut hendrerit id amet quam accumsan. Volutpat fermentum scelerisque arcu maecenas.</p>
                <div className='row'>
                    <Button label={new Date().toLocaleDateString('en-US').toString()}/>
                    <Button label='My Journal'/>
                </div>
            </div>
        </div>
    )
}

export default Card
