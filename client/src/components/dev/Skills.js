import React from 'react'
import hck from '../../assets/imgs/hackerank badges.png'
import py from '../../assets/imgs/Groupe 17.png'
import js from '../../assets/imgs/Groupe 16.png'
import go from '../../assets/imgs/Groupe 28.png'
import html from '../../assets/imgs/Groupe 26.png'
import css from '../../assets/imgs/Groupe 27.png'
import c from '../../assets/imgs/Groupe 19.png'
import java from '../../assets/imgs/Groupe 23.png'
import cpp from '../../assets/imgs/Groupe 21.png'

import rect from '../../assets/imgs/Groupe 30.png'
import node from '../../assets/imgs/Groupe 29.png'
import sql from '../../assets/imgs/Groupe 44.png'
import mdb from '../../assets/imgs/Groupe 45.png'
import saas from '../../assets/imgs/Groupe 47.png'

const Skills = () => {
    return (
        <div className="Container" id="Skills">
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
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={js} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "gray" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={go} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "gray" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={java} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={c} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={cpp} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "gray" }}/>
                                <div className="bar" style={{"background" : "gray" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={css} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                            </div>
                        </div>
                        <div className="plngholder">
                            <img src={html} alt=""/>
                            <div className="progressbar">
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                                <div className="bar" style={{"background" : "#02C436" }}/>
                            </div>
                        </div>

                    </div>
                    <div className="three">
                        <div className="hackerrankbagesholder">
                            <h1>Hackerank<br/>badges</h1>
                            <div className="imgctn">
                                <img src={hck} alt=""/>
                            </div>
                        </div>
                        <div className="framworkholder">
                            <h1>Frameworks</h1>
                            <div className="imgctn">
                                <img src={rect} alt=""/>
                                <img src={node} alt=""/>
                                <img src={saas} alt=""/>
                                <img src={sql} alt=""/>
                                <img src={mdb} alt=""/>
                            </div>
                        </div>
                        <h1 className="Title">Skills</h1>
                    </div>
                </div>
            </div>
    )
}

export default Skills
