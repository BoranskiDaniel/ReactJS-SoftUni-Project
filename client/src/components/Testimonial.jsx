export default function Testimonial() {
    return (
        <>
            <div id="testimonial" className="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>testimonial</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients_red">
                <div className="container">
                    <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ul className="carousel-indicators">
                            <li data-target="#testimonial_slider" data-slide-to="0" className=""></li>
                            <li data-target="#testimonial_slider" data-slide-to="1" className="active"></li>
                            <li data-target="#testimonial_slider" data-slide-to="2" className=""></li>
                        </ul>
                        {/* <!-- The slideshow --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="testomonial_section">

                                    <div className="full testimonial_cont text_align_center cross_layout">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                <div className="testomonial_img">
                                                    <i><img src="images/tes.jpg" alt="#" /></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                <div className="cross_inner">
                                                    <h3>Johndue<br /><strong className="ornage_color">Farm & CO</strong></h3>
                                                    <p><img src="icon/1.png" alt="#" />ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit
                                                        <img src="icon/2.png" alt="#" />
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item active">

                                <div className="testomonial_section">
                                    <div className="full center">
                                    </div>
                                    <div className="full testimonial_cont text_align_center cross_layout">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                <div className="testomonial_img">
                                                    <i><img src="images/tes.jpg" alt="#" /></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                <div className="cross_inner">
                                                    <h3>Johndue<br /><strong className="ornage_color">Farm & CO</strong></h3>
                                                    <p><img src="icon/1.png" alt="#" />ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit
                                                        <img src="icon/2.png" alt="#" />
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="carousel-item">

                                <div className="testomonial_section">
                                    <div className="full center">
                                    </div>
                                    <div className="full testimonial_cont text_align_center cross_layout">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                <div className="testomonial_img">
                                                    <i><img src="images/tes.jpg" alt="#" /></i>
                                                </div>
                                            </div>
                                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                <div className="cross_inner">
                                                    <h3>Johndue<br /><strong className="ornage_color">Farm & CO</strong></h3>
                                                    <p><img src="icon/1.png" alt="#" />ipsum dolor sit amet, consectetur
                                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit
                                                        <img src="icon/2.png" alt="#" />
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};