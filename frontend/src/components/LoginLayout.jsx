import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Footer from './Footer'
import Header from './Header'

const LoginLayout = () => {
    const {token} = useStateContext();

    if(token && localStorage.getItem("user") !== null){
        return <Navigate to="/" />
    }

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LoginLayout