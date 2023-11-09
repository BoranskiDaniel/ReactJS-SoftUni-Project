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
                                <figure><img src="images/offer1.png" alt="agriculture" /></figure>
                                <p>Need agricultural products? Try the best products from local producers with many years of experience and undisputed quality.</p>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin_ttt">
                            <div className="offer_box">
                                <h3>Fresh Vegatables</h3>
                                <figure><img src="images/offer2.png" alt="vegetables" /></figure>
                                <p>Fresh vegetables without pesticides are grown with desire and love. Perfect choice for a healthy life.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin-lkk">
                            <div className="offer_box">
                                <h3>Fresh Fruits</h3>
                                <figure><img src="images/Fruits.jpg" alt="fruits" /></figure>
                                <p>Juicy fruits grown in nature. Ideal source of energy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};