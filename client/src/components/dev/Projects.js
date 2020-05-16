import React from 'react'
import AT from '../../assets/imgs/AT.png'
import AP from '../../assets/imgs/APPS2EE.png'
import TMC from '../../assets/imgs/TMC.png'
import LI from '../../assets/imgs/MyLists.png'
const Projects = () => {
    return (
        <div className="Container li">
                <div className="Projects">
                    <div  className="slider" >
                        <div className="repoholder">
                            <p>Task Manager and Cleaner</p>
                            <img src={TMC} alt=""/>
                        </div>
                        <div className="repoholder">
                            <img src={AT} alt=""/>
                            <p>Algerian Threads</p>
                        </div>
                        <div className="repoholder">
                            <img src={LI} alt=""/>
                            <p>My Lists</p>
                        </div>
                        <div className="repoholder">
                            <img src={AP} alt=""/>
                            <p>APP S2EE</p>
                        </div>
                    </div>
                    <p className="sub">Click to access my github repository</p>
                </div>
                <h1 className="Title">Projects</h1>
            </div>
    )
}

export default Projects
