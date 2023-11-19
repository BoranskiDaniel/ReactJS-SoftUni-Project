import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    const [currentForm, setCurrentForm] = useState("login")
    return (
        <nav className="main-menu">
            <ul>
                <li className="active"> <Link to="/"> Home  </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/products"> Products </Link></li>
                {currentForm === "login" ?
                    <>
                        <li> <Link to="/addProduct"> Add product </Link></li>
                        <li> <Link to="/myProducts"> My products </Link></li>
                        <li><a href="#logout">Logout</a></li>
                    </> :
                    <>
                        <li> <Link to="/login"> Login </Link></li>
                        <li> <Link to="/register"> Register </Link></li>
                    </>
                }
            </ul>
        </nav>
    );
};
