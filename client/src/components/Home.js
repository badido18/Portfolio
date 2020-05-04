import React , {Fragment} from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Dev from "./Dev"
import Design from "./Design"
import devimg from "../assets/imgs/CS.jpg"
import dgnimg from "../assets/imgs/DN.jpg"
const Home = () =>  {

    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route path = "/">
                        <Link to="/dev" ><div className="Devdiv">                                                    
                            <img alt="" src={devimg} />
                            <div className="gliding1">
                                <h1>Developer</h1>
                                <h3 >Side</h3>
                            </div>
                            </div>
                            <div className="bord1"/></Link>
                        <Link to="/design"><div className="Desdiv"> 
                            <img alt="" src={dgnimg} />
                            <div  className="gliding2">
                                <h1>DESIGNER</h1>
                                <h3>Side</h3>
                            </div>
                            
                            </div>
                            <div className="bord2"/></Link>
                    </Route>

                    <Route path="/dev" >
                        <Dev/>
                    </Route>
                    <Route path="/design" >
                        <Design/>
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default Home
