import React from 'react'
import "./footer.css"
import img from "../../assets/Logo1.png"

const Footer = () => {
    return (
        <div className="footer">
           
            <a href="">About</a>
            <a href="">Sponsor</a>
            <a href="">Help</a>
            <div className="footerlogo">
                <img src={img}/>
            </div>

        </div>
    )
}

export default Footer
