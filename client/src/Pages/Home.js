import React , {useState} from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Dev from "./Dev"
import Design from "./Design"
import devimg from "../assets/imgs/CS.jpg"
import dgnimg from "../assets/imgs/DN.jpg"
import Loading from "./LoadingBlack"
import LoadingO from "./LoadingOrange"
const Home = () =>  {
    const [Load, setLoad] = useState(true)
    return (
        <Router>
                <Switch>
                    <Route path = "/">
                        <Link to="/dev" ><div className="Devdiv">                                                    
                            <img alt="" src={devimg} />
                            <div >
                                <h1>Developer</h1>
                                <h3 >Side</h3>
                            </div>
                            </div>
                            <div className="bord1"/></Link>
                        <Link to="/design"><div className="Desdiv"> 
                            <img alt="" src={dgnimg} />
                            <div  >
                                <h1>DESIGNER</h1>
                                <h3>Side</h3>
                            </div>
                            
                            </div>
                            <div className="bord2"/></Link>
                    </Route>

                    <Route path="/dev" >
                        {
                            Load ? <Loading/> : null   
                        } 
                        <Dev setLoad={setLoad}/> 
                    </Route>
                    <Route path="/design" >
                        {
                            Load ? <LoadingO/> : null 
                        } 
                        <Design setLoad={setLoad}/>
                    </Route>
                </Switch>
        </Router>
    )
}

export default Home