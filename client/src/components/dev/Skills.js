import React from 'react'
import hck from '../../assets/imgs/hackerank badges.png'
import py from '../../assets/imgs/Groupe 17.png'

const Skills = () => {
    return (
        <div className="Container">
                <div className="Skills">
                    <div className="one">
                        <div className="litleholder">
                            <h1>Soft Skills</h1>
                            <p>
                                Problem Solving <br/>
                                Event Organizing <br/>
                                Public Speaking <br/>
                            </p>
                        </div>
                        <div className="litleholder">
                            <h1>Languages</h1>
                            <div className="lngholder">
                                <h1>English</h1>
                                <div className="badgeGreen">
                                    <p>Fluent</p> 
                                </div>
                            </div>
                            <div className="lngholder">
                                <h1>French</h1>
                                <div className="badgeBlue">
                                    <p>Native</p>
                                </div>
                            </div>
                            <div className="lngholder">
                                <h1>Arabic</h1>
                                <div className="badgeBlue">
                                    <p>Native</p>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="two">
                        <h1>Programing<br/>Languages</h1>
                        <div className="lvlholder">
                            <h1 >beginner</h1>
                            <h1 style={{"color" : "#cd7f32" }}>inter</h1>
                            <h1 style={{"color" : "silver"}} >pro</h1>
                            <h1 style={{"color" : "gold"}} >expert</h1>
                        </div>
                        <div className="plngholder">
                            <img src={py} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "green" }}/>
                                <div className="bar" style={{"background" : "green" }}/>
                                <div className="bar" style={{"background" : "green" }}/>
                                <div className="bar" style={{"background" : "green" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="three">
                        <div className="hackerrankbagesholder">
                            <img src={hck} alt=""/>
                        </div>
                        <div className="framworkholder">
                            <img src="" alt=""/>
                        </div>
                        <h1 className="Title">Skills</h1>
                    </div>
                </div>
            </div>
    )
}

export default Skills
