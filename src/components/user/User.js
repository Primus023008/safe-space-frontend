import React from 'react'
import "./user.css"
import Input from '../input/Input'
import Button from '../button/Button'

const User = () => {
    return (
        <div className='profile'>
            <div className='topthird'>
                <div className='banner'></div>
                <div className='profilepic'></div>  
            </div> 
            <div className='midthird'>
                <div className='submid'>
                    <Input placeholder="Enter Name"
                    type='text' 
                    button={true} />
                    <Input placeholder="Enter Email address"
                    type='text'
                    button={true} />
                    <Input placeholder="Enter Number"
                    type='number'
                    button={true} />
                </div>
                <p>Update Password</p>
                <div className='submid'>
                    <Input placeholder="Old Password"
                    type='text' />
                    <Input placeholder="New Password"
                    type='text' />

                </div>
                
            </div>
            <div className="bottomthird">
                <Button label="Update Password"/>
            </div>
        </div>
    )
}

export default User
