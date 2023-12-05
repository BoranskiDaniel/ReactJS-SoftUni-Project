import Offer from "../offer/Offer";
import * as productService from "../../services/productService";
import { ProductContext } from "../../contex/ProductContext";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

        try {
            await productService.del(productId);
            navigate('/products')
        } catch (error) {
            throw new Error(`${error}`)
        };

        setShowPorduct(state => state.filter(x => x._id !== productId));
    };

    const contextValue = { onDeleteHandler }

    return (
        <ProductContext.Provider value={contextValue}>
            <div id="product" className="product">
                <Offer />
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
                </div>
            </div >
        </ProductContext.Provider>
    );
};
