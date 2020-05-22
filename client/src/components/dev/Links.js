import React from 'react'
import gitlogo from '../../assets/imgs/github-1.svg'
import gittxt from '../../assets/imgs/github-2.svg'
import hkrlogo from '../../assets/imgs/hackrrank.svg'
import hkrtxt from '../../assets/imgs/hackerrank.svg'
import Inlogo from '../../assets/imgs/linkedin-icon-2.svg'
import Intxt from '../../assets/imgs/LinkedIN.svg'


const Links = () => {
    return (
        <div className="Container li" id="Links">
                <div className="Links">
                    <button onClick={()=> window.open("https://www.hackerrank.com/badido18", "_blank")} className="link">
                        <img className="Linkogo" src={hkrlogo} alt=""/>
                        <img className="Linktxt" src={hkrtxt} alt=""/>
                    </button>
                    <button onClick={()=> window.open("https://github.com/badido18", "_blank")} className="link">
                        <img className="Linkogo" src={gitlogo} alt=""/>
                        <img className="Linktxt" src={gittxt} alt=""/>
                    </button>
                    <button onClick={()=> window.open("https://www.linkedin.com/in/badido18/", "_blank")} className="link">
                        <img className="Linkogo" src={Inlogo} alt=""/>
                        <img className="Linktxt" src={Intxt} alt=""/>
                    </button>
                </div>
                <h1 className="Title">Links</h1>
        </div>
    )
}

export default Links
