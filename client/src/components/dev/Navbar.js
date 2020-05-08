import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'

const Navbar = () => {
    const [redirect, setredirect] = useState(null)
    const SwitchtoDesign = () => {
        setredirect("/")
    }
    return (
        redirect ? <Redirect to={redirect}/>
        : <div id="navbar" className="navbar" >
                <h1>DEV side</h1>
                    <div className="buttons">                       
                        <button>Summary</button>
                        <button>Skills</button>
                        <button>Projects</button>
                        <button>Career</button>
                        <button>Links</button>
                    </div>
                <button className="Green">Contact Me</button>
                <div className="todesign">
                    <button onClick={SwitchtoDesign}>Design</button>
                </div>
        </div>
    )
}

export default Navbar
