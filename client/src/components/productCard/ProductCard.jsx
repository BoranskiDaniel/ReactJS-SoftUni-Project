import Order from "../order/Order";
import AuthContext from "../../contex/AuthContext";

import styles from "./ProductCard.module.css";
import { useState, useContext } from "react";

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
    const [order, setOrder] = useState(false);

    const orderHandler = () => {
        if (order === false) {
            setOrder(true);
        } else {
            setOrder(false);
        };
    }

    const closeHandler = () => {
        setOrder(false)
    }

    const { onDeleteHandler } = useContext(AuthContext)
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
                            <p className={styles.price}>Price: {price || negotiable}</p>
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
                <button > Edit</button>
                <button onClick={() => onDeleteHandler(_id)}> Detelete</button>
            </div>

            {order && <Order name={name} company={company} closeHandler={closeHandler} />}
        </>
    );
};