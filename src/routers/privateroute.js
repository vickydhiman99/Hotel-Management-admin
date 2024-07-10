import React from 'react'
// import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

function Privateroute() {
    // let isAuth = useSelector((state) => state.user.loginData);
     let isAuth = sessionStorage.getItem("token");
    const isLoggedIn = isAuth && isAuth;
    
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default Privateroute
