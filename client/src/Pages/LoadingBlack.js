import React from 'react'
import Bean from '../assets/gifs/Bean Eater.svg'
const LoginBlack = () => {
    return (
        <div className="LoadingB">
            <div className="centralContainer">
                <h1>Loading</h1>
                <img src={Bean} alt=""/>
                <p>"Waiting the ghosts to leave"</p>
            </div>
        </div>
    )
}

export default LoginBlack
