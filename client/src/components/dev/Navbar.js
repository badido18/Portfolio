import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'

const Navbar = () => {
    const [redirect, setredirect] = useState(null)
    const SwitchtoDesign = () => {
        setredirect("/des")
    }
    const Clickhandler = (e)=> {
        var elt = document.getElementById(e.target.textContent)
        if (e.target.textContent === "Links") 
         elt.scrollIntoView({ block: 'start',  behavior: 'smooth' }) 
        else
         elt.scrollIntoView({ block: 'end',  behavior: 'smooth' }) ;
    }
    return (
        redirect ? <Redirect to={redirect}/>
        : <div id="navbar" className="navbar" >
                <div className="navcontent">
                    <h1>DEV side</h1>
                        <div className="buttons">                       
                            <button onClick={Clickhandler}>Summary</button>
                            <button onClick={Clickhandler}>Skills</button>
                            <button onClick={Clickhandler}>Projects</button>
                            <button onClick={Clickhandler}>Career</button>
                            <button onClick={Clickhandler}>Links</button>
                        </div>
                    <button className="Green">Contact Me</button>
                    <div className="todesign">
                        <button onClick={SwitchtoDesign}>Design</button>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
