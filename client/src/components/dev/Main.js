import React from 'react'

const Main = () => {
    return (
        <div className="Container main">
                <div className="summary">
                    <div className="imgholder">
                        <img src="" alt=""/>
                        <h3>Mohamed Abdelmadjid</h3>
                        <h3>Boudis</h3>
                    </div>
                    <div className="placehold">
                        <img src="" alt=""/>
                        <h3>Algeirs, Algeria</h3>
                        <img src="" alt=""/>
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
                    <h1>Hi,</h1>
                    <p>I am a CS ethisiast and programmer,<br/>
                        I like programming and leaning new stuff <br/>
                        here bellow y can find some of my occupations<br/>
                        and things i like to do on my daily life <br/>
                    </p>
                    <div className="carddholder">
                        <div className="card">
                            Coding
                        </div>
                        <div className="card">
                            Design
                        </div>
                        <div className="card">
                            Gaming  
                        </div>
                        <div className="card">
                            Football
                        </div>
                        <div className="card">
                            Music
                        </div>
                        <div className="card">
                            Design
                        </div>
                    </div>
                    <div className="sub">
                        <p>Learn more about me bellow</p>
                    </div>
                    <h1 className="Title">Bio</h1>
                </div>
            </div>
    )
}

export default Main
