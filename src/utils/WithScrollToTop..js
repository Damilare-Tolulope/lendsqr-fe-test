import React, { useEffect } from 'react'

const withScrollToTop = Component => {
    const Hoc = () => {
        useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
        return <Component />
    }
    return Hoc;
}

export default withScrollToTop