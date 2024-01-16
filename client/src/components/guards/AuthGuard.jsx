import {Navigate } from "react-router-dom";
import { useContext } from "react"
import AuthContext from "../../contex/AuthContext"

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {

        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    )
}