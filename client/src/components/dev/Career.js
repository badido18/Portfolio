import React, { useEffect } from 'react'
import etic from '../../assets/imgs/LOGO ETIC BLANC.png'
import esi from '../../assets/imgs/ESI.png'
import shell from '../../assets/imgs/shellmates-8.png'
import da from '../../assets/imgs/down-arrow.svg'
const Career = () => {
    useEffect(() => {
            var acc = document.getElementsByClassName("accordionbutton");
            for (var i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                      this.lastChild.style.transform = "rotate(00deg)"
                    } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                      this.lastChild.style.transform = "rotate(90deg)"
                    }
                    
                })
            }
            document.getElementById("last").style.maxHeight = "auto"
    }, [])
    return (
        <div className="Container li" id="Career">
                <div className="Career">
                    <div className="accordion">
                        <div className="accordionbutton">
                            <div className="ti"> <h1>2017</h1></div>
                            <img src={esi} alt=""/>
                            <h1 className="tit">Ecole nationale supérieure d'informatique Algiers</h1>
                            <img src={da} alt=""/>
                        </div>
                        <div className="accordpanel">
                            <p>
                                High national school of computer science in Algiers for 5 years , <br/>
                                Degree : Master equivalent ( engineering )<br/>
                                Exprected graduation  : July 2022 
                            </p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordionbutton">
                            <div className="ti"> <h1>2017</h1></div>
                            <img src={etic} alt=""/>
                            <h1 className="tit">ETIC CLUB</h1>
                            <img src={da} alt=""/>
                        </div>
                        <div className="accordpanel">
                            <p>
                                A Student club joined in 2017 being freshman i learned a lot of soft skills and team working, <br/>
                                the club is centered to entrepreneurship and company topics , where a lot of events were <br/>
                                organized every year ( checkout the <a href="http://                                                                etic-club.net" style={{"textDecoration" : "none" , "color" : "black"}}>website</a>)
                                being part of the organization <br/>
                                i worked on Designs, Companies Contacts and much more !
                            </p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordionbutton">
                            <div className="ti"> <h1>2019</h1></div>
                            <img src={shell} alt=""/>
                            <h1 className="tit">Shellmates CLUB</h1>
                            <img src={da} alt=""/>
                        </div>
                        <div className="accordpanel" id="last">
                            <p>
                                A Cyber security student club , were the main events about security on IT was made<br/>
                                An incredible events from CTFs to sensibilization all around the universities<br/>
                                Most skills learned were technical , also soft skills with team working and managing <br/>
                                My Main Acitvity : Development and Design 
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="Title ttt">Career</h1>
            </div>
    )
}

export default Career
