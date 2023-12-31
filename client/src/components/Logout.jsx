import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contex/AuthContext";
import * as authService from "../services/authService"


export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            })
            .catch(() => {
                logoutHandler();
                navigate('/')
            })
    }, []);

    return null;
}