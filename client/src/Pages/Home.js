import React , {useState, Fragment , useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import devimg from "../assets/imgs/CS.jpg"
import dgnimg from "../assets/imgs/DN.jpg"
const Home = (props) =>  {
    const { setLoad } = props
    useEffect(() => {
        setLoad(false)
        return () => {
            setLoad(true)
        }
    }, [setLoad])
    const [redirect, setredirect] = useState(null)
    const SwitchtoDesign = () => {
        setredirect("/des")
    }
    const SwitchtoDev = () => {
        setredirect("/dev")
    }
    return (
        redirect ? <Redirect to={redirect}/>
        :<Fragment>
            <div className="Devdiv" onClick={SwitchtoDev}>                                                    
                <img alt="" src={devimg} />
                <div >
                    <h1>Developer</h1>
                    <h3 >Side</h3>
                </div>
                </div>
                <div className="bord1"/>
            <div className="Desdiv" onClick={SwitchtoDesign}> 
                <img alt="" src={dgnimg} />
                <div  >
                    <h1>DESIGNER</h1>
                    <h3>Side</h3>
                </div>
                
                </div>
                <div className="bord2"/>
             
        </Fragment>
    )
}

export default Home
