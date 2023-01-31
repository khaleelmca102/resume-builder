import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate, Outlet, useLocation } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import Footer from "./Footer"
import Header from "./Header"
import axiosClient from "../axios-client";

const DefaultLayout = () => {
    const {token,currentNav,setCurrentNav,setToken,setLoader,user} = useStateContext();
    const [activeMenu,setActiveMenu] = useState(currentNav);
    const location = useLocation();
    const menuItems = [
        {
        'title':'Template',
        'url':'template'
        },
        {
        'title':'Personal Data',
        'url':'personaldata'
        }
    ]
    
    const setActieNav = (nav) => {
        setCurrentNav(nav);
        setActiveMenu(nav);
    }
    let currentPage = location.pathname;
    currentPage = currentPage.replace('/','');
    if(currentPage === ''){
        currentPage = currentNav;
    }
    useEffect(() => {
        setCurrentNav(currentPage);
        setActiveMenu(currentPage);
    },[currentPage])

    const onLogout = () => {
        setCurrentNav('template');
        setLoader(true);
        const payload = {
            email_id: user.email_id,
        } 
        axiosClient.post('/logout')
            .then(({}) => {
                setLoader(false);
                setToken(null);
            })
            .catch(err => {
                const response = err.response;
                if(response && response.status === 422){
                    console.log(response);
                }
            })    
    }

    if(!token){
        return <Navigate to="/login" />
    }

   
    return (
        <div id="divDefault">
            <Header onLogout={onLogout} />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 sidenav">
                        <nav className="navbar">
                            <ul className="navbar-nav mr-auto">                                
                                {menuItems.map((menuItem) => (
                                    <li 
                                        key={menuItem.url}
                                        className="nav-item" 
                                    >
                                        <Link 
                                            to={`/${menuItem.url}`}
                                            className={`nav-link ${activeMenu == menuItem.url && 'active'}`}
                                        >
                                            {menuItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9"> 
                        <div className="container">                
                            <Outlet /> 
                        </div> 
                    </div>
                </div> 
            </div>
            <Footer />
        </div>
        )
    }

export default DefaultLayout