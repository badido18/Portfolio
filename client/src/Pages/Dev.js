import React , {useEffect}  from 'react'
import Nav from '../components/dev/Navbar'
import Main from '../components/dev/Main'
import Skills from '../components/dev/Skills'
import Projects from '../components/dev/Projects'
import Career from '../components/dev/Career'
import Links from '../components/dev/Links'
const Dev = (props) => {
    const { setLoad } = props
    useEffect(() => {
        setLoad(false)
        return () => {
            setLoad(true)
        }
    }, [setLoad])
    return (
        <div className="DevPage">
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Career/>
            <Links/>
            <div className="Container">
                <button className="Green">Contact Me</button>
            </div>
            <div className="Container">
                <div className="footer">
                    <button>Back Home</button>
                    <p>
                        This wesbsite was made by Mohamed Abdelmadjid Boudis <br/> 
                        MIT License @2020 / find on github @badido18
                    </p>
                    <button>Back to top</button>
                </div>
            </div>
        </div>
    )
}

export default Dev
