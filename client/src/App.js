import React,{useState}  from 'react'
import Home from "./Pages/Home.js"
import Dev from "./Pages/Dev"
import Design from "./Pages/Design"
import Loading from "./Pages/LoadingBlack"
import LoadingO from "./Pages/LoadingOrange"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './index.css'
function App() {
  const [Load, setLoad] = useState(true)
  return (
      <Router>
                <Switch>
                        <Route path="/dev" >
                            {
                                Load ? <Loading/> : null   
                            } 
                            <Dev setLoad={setLoad}/> 
                        </Route>
                        <Route path="/des" >
                            {
                                Load ? <LoadingO/> : null 
                            } 
                            <Design setLoad={setLoad}/>
                        </Route>
                        <Route path = "/">
                            <Home/>
                        </Route>
                  </Switch>
      </Router>
  );
}

export default App;
