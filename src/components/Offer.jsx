export default function Offer() {
    return (
        <div className="offer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2>Special <strong className="black"> Offers</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                            <div className="offer_box">
                                <h3>Agriculture Products</h3>
                                <figure><img src="images/offer1.png" alt="img" /></figure>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin_ttt">
                            <div className="offer_box">
                                <h3>Fresh Vegatables</h3>
                                <figure><img src="images/offer2.png" alt="img" /></figure>
                                <p>consectetur adipiscing elit, sed do eiusmodmpor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin-lkk">
                            <div className="offer_box">
                                <h3>Farm Factory</h3>
                                <figure><img src="images/offer3.png" alt="img" /></figure>
                                <p>consectetur adipiscing elit, sed do eiusmodmpor incididunt ut labore et dolore magna</p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <a className="read-more">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};