import React, { useState } from 'react'
import "./user.css"
import Input from '../input/Input'
import Button from '../button/Button'

const User = () => {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [oldpwd, setOldPwd] = useState('');

    const pwdHandler= () => {
        console.log(oldpwd,pwd)
    }
    return (
      
        <div className='profile'>
            <div className='topthird'>
                <div className='banner'></div>
                <div className='profilepic'></div>  
            </div> 
            <div className='midthird'>
                <div className='submid'>
                    <Input 
                    placeholder="Enter Name"
                    type='text' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    button={true} 
                    />

                    <Input placeholder="Enter Email address"
                    type='text'
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    button={true} 
                    />

                    <Input placeholder="Enter Number"
                    type='number'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    button={true} 
                    />
                </div>
                <p>Update Password</p>
                <div className='submid'>
                    <Input 
                    placeholder="Old Password"
                    type='password' 
                    button={true}
                    value={oldpwd}
                    onChange={(e)=>setOldPwd(e.target.value)} 
                    />

                    <Input 
                    placeholder="New Password"
                    type='password' 
                    button={true}
                    value={pwd}
                    onChange={(e)=>setPwd(e.target.value)}
                    />

                </div>
                
            </div>
            <div className="bottomthird">
                <Button onClick={pwdHandler} label="Update Password"/>
            </div>
        </div>
        
    )
}

export default User
