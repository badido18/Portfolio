import React from 'react'
import PL from '../../assets/imgs/PLB.png'
import phold from '../../assets/imgs/placeholder.png'
import dz from '../../assets/imgs/dz.png'
const Main = () => {
    return (
        <div className="Container main">
                <div className="summary">
                    <div className="imgholder">
                        <img src={PL} alt=""/>
                        <h4>Mohamed Abdelmadjid</h4>
                        <h3>Boudis</h3>
                    </div>
                    <div className="placehold">
                        <img src={phold}alt=""/>
                        <h5>Algeirs, Algeria</h5>
                        <img src={dz} alt=""/>
                    </div>
                    <div className="badgeBlack">
                        <p>Fullstack <b>Developer</b></p>
                    </div>
                    <div className="badgeBlack">
                        <p>Status <b>Student</b></p>
                    </div>
                    <div className="badgeGreen">
                        <p><b>Hireable</b></p>
                    </div>
                    <h1 className="Title">Summary</h1>
                </div>
                <div className="bio">
                    <div className="bioctn">
                        <h1>Hi,</h1>
                        <p className="textp">I am a CS ethisiast and programmer,<br/>
                            I like programming and leaning new stuff <br/>
                            here bellow you can find some of my occupations<br/>
                            and things I like to do on my daily life <br/>
                        </p>
                        <div className="cardholder">
                            <div className="card">
                                <p>Coding</p>  
                            </div>
                            <div className="card">
                                <p>Design</p> 
                            </div>
                            <div className="card">
                                <p>Gaming</p>    
                            </div>
                            <div className="card">
                                <p>Football</p>  
                            </div>
                            <div className="card">
                                <p>Music</p> 
                            </div>
                        </div>
                        <div className="sub">
                            <p>Learn more about me bellow</p>
                        </div>
                    </div>
                    <h1 className="Title">Bio</h1>
                </div>
            </div>
    )
}

export default Main
