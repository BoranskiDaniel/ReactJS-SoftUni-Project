import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <div className="header">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="location_icon_bottum_tt">
                                <ul>
                                    <li><img src="icon/loc1.png" />Sofia, Bulgaria</li>
                                    <li><img src="icon/email1.png" />farmcompany@gmail.com</li>

                                    <li><img src="icon/call1.png" />(+359)877654321</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 location_icon_bottum">
                            <div className="row">
                                <div>
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <Navigation />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <form className="search">
                                        <input className="form-control" type="text" placeholder="Search" />
                                        <button><img src="images/search_icon.png" /></button>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};