import * as productService from "../../services/productService";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contex/AuthContext";
import styles from "../productCard/ProductCard.module.css"

export default function MyProducts({
    _id
}) {

    const { userId } = useContext(AuthContext)
    const [showMyProduct, setShowMyPorduct] = useState([]);
    useEffect(() => {
        productService.getAll()
            .then(setShowMyPorduct)
            .catch(err => console.log(err));
    }, [_id]);

    // console.log(...showMyProduct);
    let element = '';
    let imageUrl = '';
    let name = '';
    let type = '';
    let sort = '';
    let company = '';
    let price = '';

    for (let index = 0; index < showMyProduct.length; index++) {
        element = showMyProduct[index]._ownerId;
        imageUrl = showMyProduct[index].imageUrl;
        name = showMyProduct[index].name;
        type = showMyProduct[index].type;
        sort = showMyProduct[index].sort;
        company = showMyProduct[index].company;
        price = showMyProduct[index].price;

        console.log(element);
    }
    console.log(userId);

    const isOwner = userId === element;

    return (
        <>
            {isOwner && (

                <div className={styles.articles} >
                    <article >
                        <div className={styles.articleWrapper}>
                            <figure className={styles.cardFigure}>
                                <img src={imageUrl} alt={name} />
                            </figure>
                            <div className={styles.articleBody}>
                                <h2>{name}</h2>
                                <p>Type: {type}</p>
                                <p>Sort: {sort}</p>
                                <p>Company: {company}</p>
                                <p className={styles.price}>Price ($ per kg. ): {price}</p>
                            </div>
                        </div>
                    </article>
                </div>
            )}
            {showMyProduct.length === 0 && (
                <h2 style={{ width: "400px", padding: "25px", margin: "40px 0px 0px 630px" }}>You do not have products yet</h2>
            )}
        </>
    );
};