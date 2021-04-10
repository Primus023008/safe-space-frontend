import React from 'react'
import './featureComp.css'


const FeatureComp = (props) => {
    return (
        <div className={`featurebutton ${props.color}`}>
              <p>{props.label}</p>            
        </div>
    )
}

export default FeatureComp
