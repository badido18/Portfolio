import React from 'react'
import AT from '../../assets/imgs/AT.png'
import AP from '../../assets/imgs/APPS2EE.png'
import TMC from '../../assets/imgs/TMC.png'
import LI from '../../assets/imgs/MyLists.png'
const Projects = () => {
    return (
        <div className="Container li" id="Projects">
                <div className="Projects">
                    <div  className="slider" >
                        <div onClick={()=> window.open("https://github.com/badido18/Task-manager-and-cleaner", "_blank")} className="repoholder">
                            <p><br/><br/><br/><br/><br/><br/> Task Manager and Cleaner <br/><br/></p>
                            <img src={TMC} alt=""/>
                        </div>
                        <div onClick={()=> window.open("https://github.com/badido18/Algerian-Threads-Website", "_blank")} className="repoholder">
                            <img src={AT} alt=""/>
                            <p><br/><br/><br/><br/><br/><br/> Algerian Threads</p>
                        </div>
                        <div onClick={()=> window.open("https://github.com/badido18/My-Lists-Web", "_blank")} className="repoholder">
                            <img src={LI} alt=""/>
                            <p><br/><br/><br/><br/><br/><br/> My Lists</p>
                        </div>
                        <div onClick={()=> window.open("https://github.com/badido18/AppS2EE2019", "_blank")} className="repoholder">
                            <img src={AP} alt=""/>
                            <p><br/><br/><br/><br/><br/><br/> APP S2EE</p>
                        </div>
                    </div>
                    <p className="sub">Click to access my github repository</p>
                </div>
                <h1 className="Title ttt">Projects</h1>
            </div>
    )
}

export default Projects
