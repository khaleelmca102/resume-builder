import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

const StateContext = createContext({
    token: null,
    user: null,
    currentNav: 'template',
    setToken: () => {},
    setUser: () => {},
    setCurrentNav: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(133);
    const [currentNav, setCurrentNav] = useState('template')
 
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('access_token', token);
        } else {
            localStorage.removeItem('access_token');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            currentNav,
            setToken,
            setUser,
            setCurrentNav
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);