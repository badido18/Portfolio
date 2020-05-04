import React, { useEffect} from 'react'
const Dev = (props) => {
    /*
    const { setLoad } = props
    useEffect(() => {
        setLoad(false)
        return () => {
            setLoad(true)
        }
    }, [setLoad])
   */
    return (
        <div className="DevPage">
            <div className="navbar">
                <h1>DEV side</h1>
                <div className="buttons">
                    <button>Summary</button>
                    <button>Skills</button>
                    <button>Links</button>
                    <button>Projects</button>
                    <button>Career</button>
                    <button className="Green">Contact Me</button>
                </div>
                <div className="todesign">
                    <button>Design</button>
                </div>
            </div>
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
            <div className="Container">
                <div className="Skills">
                    <img src="" alt=""/>
                    <div className="1">
                        <div className="litleholder">
                            <h1>Soft Skills</h1>
                            <p>
                                Problem Solving <br/>
                                Event Organizing <br/>
                                Problem solving <br/>
                            </p>
                        </div>
                        <div className="litleholder">
                            <h1>Languages</h1>
                            <div className="lngholder">
                                <h1>English</h1>
                                <div className="badgeGreen">
                                    Fluent
                                </div>
                            </div>
                            <div className="lngholder">
                                <h1>French</h1>
                                <div className="badgeBlue">
                                    Native
                                </div>
                            </div>
                            <div className="lngholder">
                                <h1>Arabic</h1>
                                <div className="badgeBlue">
                                    Native
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="2">
                        <h1>Programing<br/>Languages</h1>
                        <div className="lvlholder">
                            <h1>beginner</h1>
                            <h1>inter</h1>
                            <h1>pro</h1>
                            <h1>expert</h1>
                        </div>
                        <div className="plngholder">
                            <img src="" alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "green" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="3">
                        <div className="hackerrankbagesholder">
                            <img src="" alt=""/>
                        </div>
                        <div className="framworkholder">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <h1 className="Title">Skills</h1>
                </div>
            </div>
            <div className="Container">
                <div className="Projects">
                    <img src="" alt=""/>
                    <div className="slider">
                        <div className="repoholder">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <p className="sub">Click to access my github repository</p>
                    <h1 className="Title">Projects</h1>
                </div>
            </div>
            <div className="Container">
                <div className="Carrer">
                    <img src="" alt=""/>
                    <div className="accordion">
                        <button className="accordionbutton">
                            <h1>2017</h1>
                            <img src="" alt=""/>
                            <h1>ETIC CLUB</h1>
                        </button>
                        <div className="accordpanel">
                            its a club who tatati tatatata
                        </div>
                    </div>
                    <h1 className="Title">Career</h1>
                </div>
            </div>
            <div className="Container">
                <div className="Links">
                    <img src="" alt=""/>
                    <button className="link">
                        <img src="" alt=""/>
                    </button>
                    <h1 className="Title">Links</h1>
                </div>
            </div>
            <div className="Container">
                <button className="Green">Contact Me</button>
            </div>
            <div className="Container">
                <div className="footer">
                    <button>Back Home</button>
                    <p>
                        This wesbsite was made by Mohamed Abdelmadjid Boudis <br/> 
                        MIT License @2020 / find on github @badido18
                    </p>
                    <button>Back to top</button>
                </div>
            </div>
        </div>
    )
}

export default Dev
