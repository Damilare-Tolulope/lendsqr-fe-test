import { createContext, useState } from 'react'

const authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState()

    const initialState = {
        isLoggedIn,
        setIsLoggedIn,
    }

    return (
        <authContext.Provider value={initialState}>
            {children}
        </authContext.Provider>
    )
}

export {
    authContext,
    AuthContextProvider
}