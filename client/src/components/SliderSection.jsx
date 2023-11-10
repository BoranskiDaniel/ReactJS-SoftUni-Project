import ForBox from "./ForBox";

export default function SliderSection() {
    return (
        <section className="slider_section">
            <ForBox />
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="2" className=""></li>
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
                                <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="second-slide" src="images/banner.jpg" alt="Second slide" />
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Moon</h1>
                                <span>FARMING COMPANY</span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi </p>
                                <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="third-slide" src="images/banner.jpg" alt="Third slide" />
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1>Moon</h1>
                                <span>FARMING COMPANY</span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi </p>
                                <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <i className='fa fa-angle-left'></i>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <i className='fa fa-angle-right'></i>
                </a>
            </div>
        </section>
    );
};