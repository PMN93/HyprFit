import Login from '../screens/login/index.jsx'
import SignUp from '../screens/createAccount/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import InitExerc from '../screens/initExerc/index.jsx';
import Exerc from '../screens/exerc/index.jsx';



const PrivateRoute = () => {
  if (!localStorage.getItem("Email")) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/initexerc',
        element: <InitExerc />,
      },
      {
        path: '/exerc',
        element: <Exerc />,
      }
    ],
  },
]);