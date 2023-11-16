import styles from "./AddProduct.module.css";
import * as productService from "../../services/productService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function AddProduct() {
    const navigate = useNavigate();
    const usernameInputRef = useRef();

    const productCreateHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.create(productData);
            navigate('/products')
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    const [checked, setChecked] = useState(false);
    const onCheckChange = () => {
        setChecked(!checked);

    }
    return (
        <div className={styles.container}>
            <form onSubmit={productCreateHandler}>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="product">Product:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                        className={styles.textField}
                            ref={usernameInputRef}
                            type="text"
                            id="product"
                            name="product"
                            placeholder="Product"
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="type">Type:</label>
                    </div>
                    <div className={styles.col75}>
                        <select className={styles.selectType} id="type" name="type">
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
                            disabled={checked}
                            required
                        />
                    </div>
                    <input
                        className={styles.check}
                        type="checkbox"
                        id="negotiable"
                        name="negotiable"
                        value="negotiable"
                        onChange={onCheckChange}
                    />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label>
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};