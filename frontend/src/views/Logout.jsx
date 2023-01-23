import React from 'react'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider';

const Logout = () => {
    const navigate = useNavigate();
    const {setToken, setLoader, setUser} = useStateContext();
    //setToken(null);
     useEffect(() => {
    //     //setLoader(true);
        // setUser({});        
    //     //setLoader(false);
          navigate("/login");
     },[]);

    return (
        <div>
            Logout
            <Outlet />
        </div>
    )
}

export default Logout