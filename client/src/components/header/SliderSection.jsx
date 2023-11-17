import { Link } from "react-router-dom";
import ForBox from "../forBox/ForBox";

export default function SliderSection() {
    return (
        <section className="slider_section">
            <ForBox />
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="images/banner.jpg" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Moon</h1>
                                <span>FARMING COMPANY</span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi </p>
                                <Link to="/about" className="buynow" >About us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};