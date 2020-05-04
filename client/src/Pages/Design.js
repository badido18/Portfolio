import React, { Fragment, useEffect } from 'react'
const Design = (props) => {
    const { setLoad } = props
    useEffect(() => {
        setLoad(false)
        return () => {
            setLoad(true)
        }
    }, [setLoad])
    return (
        <Fragment>
        </Fragment>
    )
}

export default Design
