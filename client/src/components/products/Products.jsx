import Offer from "../offer/Offer";
import * as productService from "../../services/productService";
import { ProductContext } from "../../contex/ProductContext";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductCard from "../productCard/ProductCard";

export default function Products() {

    const [showProduct, setShowPorduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        productService.getAll()
            .then(result => setShowPorduct(result))
            .catch(err => console.log(err))
    }, []);

    const onDeleteHandler = async (productId) => {
        // const hasConfirmed = confirm(`Are you sure you want to delete ${showProduct.name}?`);

        // if (hasConfirmed) {
        await productService.del(productId);

        navigate('/products');
        // }else {
        //     throw new Error(`${"Something went wrong"}`)
        // };

        setShowPorduct(state => state.filter(x => x._id !== productId));
    };

    const contextValue = { onDeleteHandler }

    if (Math.random() < 0.5) {
        throw new Error('Boundary Test');
    }

    return (
        <ProductContext.Provider value={contextValue}>
            <div id="product" className="product">
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
            </div >
            <div className="container-fluid">
                {showProduct.map((product) => (
                    <ProductCard
                        key={product._id}
                        _id={product._id}
                        _ownerId={product._ownerId}
                        name={product.name}
                        type={product.type}
                        sort={product.sort}
                        imageUrl={product.imageUrl}
                        company={product.company}
                        price={product.price}
                        negotiable={product.negotiable}
                    />
                ))}
                {showProduct.length === 0 && (
                    <h2 style={{ backgroundColor: "white", width: "200px", margin: "0px 0px 50px 630px" }}>No products yet</h2>
                )}
            </div>
            <Offer />
        </ProductContext.Provider>
    );
};
