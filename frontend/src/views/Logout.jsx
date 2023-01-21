import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';

const Logout = () => {
    const navigate = useNavigate();
    const {setToken, setLoader, setUser} = useStateContext();
    console.log('dd')
    useEffect(() => {
        setLoader(true);
        setToken(null);
        setUser({});        
        setLoader(false);
       // navigate("/");
    },[]);

    return (
        <div></div>
    )
}

export default Logout