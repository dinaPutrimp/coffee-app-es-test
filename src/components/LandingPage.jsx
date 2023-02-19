import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import NavBar from "./NavBar";

const LandingPage = () => {
    const { auth, dispatchAuth } = useContext(AuthContext);
    useEffect(() => {
        if (!auth.auth.access_token) return navigate('/')
    }, [auth.auth.access_token])
    return (
        <div className="w-full">
            <Outlet />
            <NavBar />
        </div>
    );
}

export default LandingPage;