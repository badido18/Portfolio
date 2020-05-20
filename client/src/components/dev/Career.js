import React from 'react'
import etic from '../../assets/imgs/LOGO ETIC BLANC.png'
import esi from '../../assets/imgs/ESI.png'
import shell from '../../assets/imgs/shellmates-8.png'

const Career = () => {
    return (
        <div className="Container li">
                <div className="Career">
                    <div className="accordion">
                        <div className="accordionbutton">
                            <h1>2017</h1>
                            <img src={esi} alt=""/>
                            <h1>Ecole nationale supérieure d'informatique Algiers</h1>
                        </div>
                        <div className="accordpanel">
                            its a club who tatati tatatata
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordionbutton">
                            <h1>2017</h1>
                            <img src={etic} alt=""/>
                            <h1>ETIC CLUB</h1>
                        </div>
                        <div className="accordpanel">
                            its a club who tatati tatatata
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordionbutton">
                            <h1>2019</h1>
                            <img src={shell} alt=""/>
                            <h1>Shellmates CLUB</h1>
                        </div>
                        <div className="accordpanel">
                            its a club who tatati tatatata
                        </div>
                    </div>
                </div>
                <h1 className="Title ttt">Career</h1>
            </div>
    )
}

export default Career
