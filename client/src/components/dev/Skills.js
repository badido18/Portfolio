import React from 'react'

const Skills = () => {
    return (
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
    )
}

export default Skills
