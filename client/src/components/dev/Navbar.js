import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
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
                    <button>Design</button>
                </div>
        </div>
    )
}

export default Navbar
