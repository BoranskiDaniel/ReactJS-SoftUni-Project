import Offer from "./Offer";

import { useState } from "react";

export default function Products() {
    const [isMoreProducts, setIsMoreProducts] = useState(false);
    const showMoreProducts = () => {
        setIsMoreProducts(!isMoreProducts);
    }

    return (
        <div id="product" className="product">
            <Offer />
            <div className="col-md-12">
                <button className="read-more" onClick={showMoreProducts}>See More</button>
            </div>
            {isMoreProducts && (
                <>
                    <div className="container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title">
                                        <h2>Moon <strong className="black"> products</strong></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src="images/product_img1.jpg" alt="#" />
                                                <h3>Fresh Apple </h3>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src="images/product_img2.jpg" alt="#" />
                                                <h3>Fresh Aalu </h3>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src="images/product_img4.jpg" alt="#" />
                                                <h3>Rice Field </h3>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src="images/product_img3.jpg" alt="#" />
                                                <h3>Vegetables</h3>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src="images/product_img5.jpg" alt="#" />
                                                <h3>Field Wheat </h3>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};