import React , {useEffect , useState }  from 'react'
import {Redirect} from 'react-router-dom'
import Nav from '../components/dev/Navbar'
import Main from '../components/dev/Main'
import Skills from '../components/dev/Skills'
import Projects from '../components/dev/Projects'
import Career from '../components/dev/Career'
import Links from '../components/dev/Links'
import backvid from '../assets/vid/vid.mp4'
const Dev = (props) => {
    const { setLoad } = props
    const transformNav = ()=>  document.getElementById("navbar").classList.add("navbarto");
    const resetNav = ()=>  document.getElementById("navbar").classList.remove("navbarto");
    const handlescroll = (event) => {
        if (window.pageYOffset > 0)
            transformNav()
        else
            resetNav()
    }
    useEffect(() => {
        setLoad(false)
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll);
            setLoad(true)
        }
    }, [setLoad])

    const ToTop = ()=> {
        document.getElementById("Summary").scrollIntoView({ behavior : "smooth"})
    }
    const [redirect, setredirect] = useState(null)
    const SwitchtoHome = () => {
        setredirect("/")
    }
    return (
        redirect ? <Redirect to={redirect}/>
        :<div className="DevPage" >
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Career/>
            <Links/>
            <div className="contct">
                <button className="Green">Contact Me</button>
            </div>
                <div className="footer">
                    <button onClick={SwitchtoHome}>Back Home</button>
                    <p>
                        This wesbsite was made by Mohamed Abdelmadjid Boudis
                        MIT License @2020 / find on github @badido18
                    </p>
                    <button onClick={ToTop}>Back to top</button>
                </div>
            
            <video className="backvid" loop autoPlay>
                <source src={backvid} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Dev
