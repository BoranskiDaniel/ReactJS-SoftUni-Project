import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import styles from "../editProduct/EditProduct.module.css"

export default function EditProduct() {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        type: '',
        sort: '',
        imageUrl: '',
        company: '',
        email: '',
        price: '',
        negotiable: '',
    })

    useEffect(() => {
        productService.getOne(_id)
            .then(result => {
                setProduct(result);
            });
    }, [_id]);

    const editProductHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.edit(_id, values);

            navigate('/products');
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setProduct(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={editProductHandler}>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="name">Product:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Product name"
                            value={product.name}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="type">Type:</label>
                    </div>
                    <div className={styles.col75}>
                        <select className={styles.selectType} id="type" onChange={onChange} name="type">
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                            <option value="agricultural">Agricultural Product</option>
                        </select>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="sort">Sort:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="sort"
                            name="sort"
                            placeholder="Product sort"
                            value={product.sort}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="imageUrl">Add image:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="imageUrl"
                            value={product.imageUrl}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="company">Company:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company name"
                            value={product.company}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email for orders"
                            value={product.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="price">Price per kg. ($)</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={onChange}
                            // disabled={checked}
                            required
                        />
                    </div>
                    {/* <input
                        className={styles.check}
                        type="checkbox"
                        id="negotiable"
                        name="negotiable"
                        value={product.negotiable}
                        onChange={onChange}
                    /> */}
                    {/* <label className={styles.check} htmlFor="negotiable"> Negotiable </label> */}
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Edit Product" />
                </div>
            </form>
        </div>
    );
}