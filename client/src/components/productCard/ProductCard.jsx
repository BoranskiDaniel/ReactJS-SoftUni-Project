import Order from "../order/Order";
import { Link, useParams } from "react-router-dom";

import styles from "./ProductCard.module.css";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../contex/ProductContext";
import AuthContext from "../../contex/AuthContext";
import * as productService from "../../services/productService"

export default function ProductCard({
    _id,
    name,
    type,
    sort,
    imageUrl,
    company,
    price,
    negotiable,
}) {
    const { email, userId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    // const { _id } = useParams();
    const [order, setOrder] = useState(false);
    const { onDeleteHandler } = useContext(ProductContext);

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

    // console.log(userId);
    // console.log({ ...product });
    // console.log({  });

    const closeHandler = () => {
        setOrder(false)
    };


    return (
        <>
            <div className={styles.articles} >
                <article onClick={orderHandler}>
                    <div className={styles.articleWrapper}>
                        <figure className={styles.cardFigure}>
                            <img src={imageUrl} alt={`${name}`} />
                        </figure>
                        <div className={styles.articleBody}>
                            <h2>{name}</h2>
                            <p>Type: {type}</p>
                            <p>Sort: {sort}</p>
                            <p>Company: {company}</p>
                            <p className={styles.price}>Price ($ per kg. ): {price || negotiable}</p>
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
                    {/* {userId === product._ownerId && ( */}
                        <div>
                            <button>
                                <Link to={(`/products/${_id}/edit`, { _id })} > Edit</Link>
                            </button>
                            <button onClick={() => onDeleteHandler(_id)}> Delete</button>
                        </div>
                    {/* )} */}
                </div>
            </div>

            {order && <Order name={name} company={company} closeHandler={closeHandler} />}
        </>
    );
}