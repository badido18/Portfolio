import React from 'react'
import Roll from '../assets/gifs/Rolling.svg'
const LoginOrange = () => {
    return (
        <div className="LoadingB Orange">
            <div className="centralContainer">
                <h1>Loading</h1>
                <img src={Roll} alt=""/>
                <p>"Clocks are being set"</p>
            </div>
        </div>
    )
}

export default LoginOrange
