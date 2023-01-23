import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import LoginLayout from './components/LoginLayout';
import Login from './views/Login';
import Logout from './views/Logout';
import NotFound from './views/NotFound';
import PersonalData from './views/PersonalData';
import Signup from './views/Signup';
import Template from './views/Template';

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                path:'/',
                element: <Template />
            },
            {
                path:'/template',
                element: <Template />
            },
            {
                path:'/personaldata',
                element: <PersonalData />
            },
            {
                path:'/logout',
                element: <Logout />
            }
        ]
    },
    {
        path:'/',
        element: <LoginLayout />,
        children: [
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            }
        ]
    },
    {
        path:'*',
        element: <NotFound />
    }

])

export default router;
