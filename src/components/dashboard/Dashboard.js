import React from 'react'
import './dashboard.css'
import Feature from '../featureComp/FeatureComp'
import img from '../../assets/Safe Space Illustrations 1.png'
import Button from '../button/Button'

const Dashboard = () => {
    return (
        <div className="dashmain">
            <div className="books">
                <div className="booksright small-hide"></div>
                <div className="booksleft">
                    <p className="h2">
                        Book <br/>Recomendations
                    </p>
                    <div className="bookcarousel"></div>
                </div>
            </div>

            <div className="features">
                <div className='smallscreen-items'>
                    <img src={img}/>
                    <div className="booksright small-show"></div>
                </div>
                <div className="featuresleft">
                    <Feature label="Chat with your AR Buddy "
                    color="redfeature"/>
                    <Feature label="Put me to sleep"
                    color="bluefeature"/>
                    <Feature label="Show and tell "
                    color="greenfeature"/>
                    <Feature label="Colour mood analysis "
                    color="pinkfeature"/>
                    <Feature label="Track your mood "
                    color="violetfeature"/>
                </div>
            </div>
            <div className="features" >
                <div className="mediright">
                    <p className="h2">Meditation for the mind</p>
                    <div className="medipost"></div>
                </div>
                <div className="medileft">
                    <p className="h2">Say hi <br/>to your self-care journal</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget facilisis massa sed nisi. Tincidunt eget ut fermentum, a dignissim mattis. Nulla feugiat duis ipsum neque enim. Quis fermentum faucibus pellentesque eu, </p>
                    <Button label="Get Started"/>
                </div>

            </div>

            <div className="explore">
                <p className="h2">Explore Daily's</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis eget facilisis massa sed nisi. Tincidunt eget ut fermentum, a dignissim mattis. Nulla feugiat duis ipsum neque enim. Quis fermentum faucibus pellentesque eu, convallis dictum in. Maecenas cursus pharetra arcu gravida urna at nullam semper. Facilisis ut non viverra ultricies. </p>
            </div>
        </div>
    )
}

export default Dashboard