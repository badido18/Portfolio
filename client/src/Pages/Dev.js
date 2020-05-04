import React, { useEffect} from 'react'
const Dev = (props) => {
    /*
    const { setLoad } = props
    useEffect(() => {
        setLoad(false)
        return () => {
            setLoad(true)
        }
    }, [setLoad])
   */
    return (
        <div className="DevPage">
            <div className="navbar">
                <h1>Dev Side</h1>
                <button>Summary</button>
                <button>Skills</button>
                <button>Links</button>
                <button>Projects</button>
                <button>Carren</button>
                <button>Contact Me</button>
            </div>
            <div className="Container main">
                <div className="summary">

                </div>
                <div className="bio">

                </div>
            </div>
            <div className="Container">
                <div className="Skills">

                </div>
            </div>
            <div className="Container">
                <div className="Projects">

                </div>
            </div>
            <div className="Container">
                <div className="Carrer">

                </div>
            </div>
            <div className="Container">
                <div className="Links">

                </div>
            </div>
            <div className="Container">
                <button>Contact Me</button>
            </div>
            <div className="Container">
                <div className="footer">

                </div>
            </div>
        </div>
    )
}

export default Dev
