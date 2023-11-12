import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="main-menu">
            <ul>
                <li className="active"> <Link to="/"> Home  </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/products"> Products </Link></li>
                <li> <Link to="/contacts"> Contact Us </Link></li>
                {/* add form, validation if user is logged out */}
                <li> <Link to="/login"> Login </Link></li>
                <li> <Link to="/register"> Register </Link></li>

                {/* if user is logged in */}
                <li> <Link to="/addProduct"> Add product </Link></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
        </nav>
    );
};
