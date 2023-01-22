import { useEffect } from "react"
import { useState } from "react"
import { Link, Navigate, Outlet, useLocation } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import Footer from "./Footer"
import Header from "./Header"

const DefaultLayout = () => {
    const {token,currentNav,setCurrentNav} = useStateContext();
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
    if(!token){
        return <Navigate to="/login" />
    }

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
   
    return (
        <div id="divDefault">
            <Header />
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
                                            // onClick={() => {
                                            //     e.preventDefault(); 
                                            //     setActieNav(menuItem.url)
                                            // }}
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