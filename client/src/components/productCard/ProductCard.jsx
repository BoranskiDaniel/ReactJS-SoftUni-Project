import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import styles from "./ProductCard.module.css";

import Order from "../order/Order";
import { ProductContext } from "../../contex/ProductContext";
import AuthContext from "../../contex/AuthContext";
import * as productService from "../../services/productService"


export default function ProductCard(
    {
        _id,
    }
) {
    const { userId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState(false);
    const { onDeleteHandler } = useContext(ProductContext);
    console.log(_id);

    useEffect(() => {
        productService.getOne(_id)
            .then(setProduct)
            .catch(err => console.log(err));
    }, [_id]);

    const orderHandler = () => {
        if (order === false) {
            setOrder(true);
        } else {
            setOrder(false);
        };
    }
    // console.log({ product });
    
    const closeHandler = () => {
        setOrder(false)
    };

    const isOwner = userId === product._ownerId;

    return (
        <>
            <div className={styles.articles} >
                <article onClick={orderHandler}>
                    <div className={styles.articleWrapper}>
                        <figure className={styles.cardFigure}>
                            <img src={product.imageUrl} alt={`${product.name}`} />
                        </figure>
                        <div className={styles.articleBody}>
                            <h2>{product.name}</h2>
                            <p>Type: {product.type}</p>
                            <p>Sort: {product.sort}</p>
                            <p>Company: {product.company}</p>
                            <p className={styles.price}>Price ($ per kg. ): {product.price || product.negotiable}</p>
                            <a className={styles.readMore}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <div className={styles.forOwner}>
                            </div>
                        </div>
                    </div>
                </article>

                <div>
                    {isOwner && (
                        <div>
                            <button type="submit">
                                <Link to={(`/products/${_id}/edit`)} > Edit</Link>
                            </button>
                            <button onClick={() => onDeleteHandler(_id)}> Delete</button>
                        </div>
                    )}
                </div>
            </div>

            {order && <Order name={product.name} company={product.company} closeHandler={closeHandler} />}
        </>
    );
}