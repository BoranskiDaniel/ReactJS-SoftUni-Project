import Offer from "./Offer";
import * as productService from "../services/productService";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
    const [isMoreProducts, setIsMoreProducts] = useState(false);
    const showMoreProducts = () => {
        setIsMoreProducts(!isMoreProducts);
    };

    const [showProduct, setShowPorduct] = useState([]);
    // const showProductClick = () => {
    //     setShowPorduct(true);
    // }
    useEffect(() => {
        productService.getAll()
            .then(result => setShowPorduct(result))
            .catch(err => console.log(err))
    }, []);


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

                        {/* <figure><img src="images/product_img1.jpg" alt="#" /> */}
                        {/* <h3>Fresh Apple </h3> */}
                        {/* </figure> */}
                        {showProduct.map((product) => (
                            <ProductCard
                                key={product._id}
                                _id={product._id}
                                name={product.name}
                                type={product.type}
                                sort={product.sort}
                                imageUrl={product.imageUrl}
                                company={product.company}
                                price={product.price}
                            />
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
};
