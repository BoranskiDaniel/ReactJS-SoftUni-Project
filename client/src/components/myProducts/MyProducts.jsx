import * as productService from "../../services/productService";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contex/AuthContext";
import styles from "../productCard/ProductCard.module.css"


export default function MyProducts({
    _ownerId
}) {

    const { userId } = useContext(AuthContext)
    const [showMyProduct, setShowMyPorduct] = useState({});
    useEffect(() => {
        productService.getMyProduct(_ownerId)
            .then(setShowMyPorduct)
            .catch(err => console.log(err));
    }, []);

    console.log(showMyProduct);
    console.log(showMyProduct._ownerId);
    console.log(userId);

    const isOwner = userId === showMyProduct._ownerId;

    return (
        <>
        {/* {isOwner && ( */}

            <div className={styles.articles} >
                <article >
                    <div className={styles.articleWrapper}>
                        <figure className={styles.cardFigure}>
                            <img src={showMyProduct.imageUrl} alt={`${showMyProduct.name}`} />
                        </figure>
                        <div className={styles.articleBody}>
                            <h2>{showMyProduct.name}</h2>
                            <p>Type: {showMyProduct.type}</p>
                            <p>Sort: {showMyProduct.sort}</p>
                            <p>Company: {showMyProduct.company}</p>
                            <p className={styles.price}>Price ($ per kg. ): {showMyProduct.price || showMyProduct.negotiable}</p>
                        </div>
                    </div>
                </article>
            </div>
        {/* )} */}
            {showMyProduct.length === 0 && (
                <h2 style={{width: "400px", padding: "25px", margin: "40px 0px 0px 630px" }}>You do not have products yet</h2>
            )}
        </>
    );
};