import React from 'react'
import gitlogo from '../../assets/imgs/github-1.svg'
import gittxt from '../../assets/imgs/github-2.svg'
import hkrlogo from '../../assets/imgs/hackrrank.svg'
import hkrtxt from '../../assets/imgs/hackerrank.svg'
import Inlogo from '../../assets/imgs/linkedin-icon-2.svg'
import Intxt from '../../assets/imgs/LinkedIN.svg'


const Links = () => {
    return (
        <div className="Container li">
                <div className="Links">
                    <button  className="link">
                        <img className="Linkogo" src={hkrlogo} alt=""/>
                        <img className="Linktxt" src={hkrtxt} alt=""/>
                    </button>
                    <button className="link">
                        <img className="Linkogo" src={gitlogo} alt=""/>
                        <img className="Linktxt" src={gittxt} alt=""/>
                    </button>
                    <button className="link">
                        <img className="Linkogo" src={Inlogo} alt=""/>
                        <img className="Linktxt" src={Intxt} alt=""/>
                    </button>
                </div>
                <h1 className="Title">Links</h1>
        </div>
    )
}

export default Links
