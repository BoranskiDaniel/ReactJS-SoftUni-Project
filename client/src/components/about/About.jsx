import { useState } from "react";
// import styles from "/styles.css?url&inline";

export default function About() {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    }

    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row">

                    <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                        <div className="about_box">
                            <h2>About us<br /><strong className="black"> Farm and company</strong></h2>
                            <p>Welcome to Moon farm and company, your one-stop online marketplace for the finest homemade produce!
                                Our platform connects dedicated farmers with savvy consumers looking for fresh, wholesome vegetables, fruits, and oats.
                                We celebrate the hard work and dedication of local farmers who pour their hearts and souls into growing and
                                nurturing the very best nature has to offer. Whether you're a farmer with a bountiful harvest to share or a
                                health-conscious foodie seeking the tastiest and most nutritious ingredients, you've come to the right place.
                            </p>
                            {isShowMore && (<>
                                <p>
                                    Our mission is to create a vibrant community where farmers can showcase their homegrown treasures and shoppers can
                                    savor the flavors of the land. We're all about fostering sustainability, supporting small-scale agriculture, and
                                    promoting the benefits of farm-fresh, organic produce.Browse through our diverse range of products and
                                    be prepared to discover the farm-fresh difference. With Moon farm and company, you're not just buying food,
                                    you're investing in the livelihoods of passionate farmers and nourishing your body with the very best nature has to offer.
                                </p >
                                <p>
                                    Join us in celebrating the beauty of homegrown goodness and explore a world of flavors at your fingertips.
                                    Together, we can create a more sustainable, healthier, and tastier future.
                                </p>
                            </>)}
                            <div className="col-md-12">
                                <button className="read-more-about" onClick={toggleReadMoreLess}>
                                    {isShowMore ? "Read less" : "Read more"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                        <div className="about_img">
                            <figure><img src="images/about.png" alt="img" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};