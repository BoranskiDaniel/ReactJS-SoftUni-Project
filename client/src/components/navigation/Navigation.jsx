import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

export default function Navigation() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <nav className="main-menu">
            <ul>
                <li className="active"> <Link to="/"> Home  </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/products"> Products </Link></li>
                {isAuthenticated && (
                    <>
                        <li> <Link to="/addProduct"> Add product </Link></li>
                        <li> <Link to="/myProducts"> My products </Link></li>
                        <li><a href="#logout">Logout</a></li>
                        <span>Hello {username}</span>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <li> <Link to="/login"> Login </Link></li>
                        <li> <Link to="/register"> Register </Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};
