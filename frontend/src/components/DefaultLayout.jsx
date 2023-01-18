import { Link, Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import Footer from "./Footer"
import Header from "./Header"

const DefaultLayout = () => {
    const {user,token,currentNav} = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }

    return (
        <div id="divDefault">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 sidenav">
                        <nav className="navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" >
                                    <Link to="/template" className="nav-link">Template</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/personaldata" className="nav-link">Personal Data</Link>
                                </li>
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