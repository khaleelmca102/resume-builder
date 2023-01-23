import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

const StateContext = createContext({
    token: null,
    user: null,
    currentNav: 'template',
    loader: false,
    setToken: () => {},
    setUser: () => {},
    setCurrentNav: () => {},
    setLoader: () => {}
})



export const ContextProvider = ({children}) => {
    const [user, _setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('access_token'));
    const [currentNav, setCurrentNav] = useState('template');
    const [loader, setLoader] = useState(false)
 
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('access_token', token);
        } else {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            setCurrentNav('template');
        }
    }

    const setUser = (user) => {
        _setUser(user);
        if(user){
            localStorage.setItem('user',user);
        } else {
            localStorage.removeItem('user');   
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            currentNav,
            loader,
            setToken,
            setUser,
            setCurrentNav,
            setLoader
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);