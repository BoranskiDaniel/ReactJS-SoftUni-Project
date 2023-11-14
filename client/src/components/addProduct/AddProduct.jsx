import styles from "./AddProduct.module.css";
import * as productService from "../../services/productService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function AddProduct() {
    const navigate = useNavigate();

    const productCreateHnalder = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.create(productData);
            navigate('/products')
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    const [checked, setChecked] = useState(false);
    const onCheckChange = () => {
        setChecked(!checked);

    }
    return (
        <div className={styles.container}>
            <form onSubmit={productCreateHnalder}>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="name">Product</label>
                    </div>
                    <div className={styles.col75}>
                        <input type="text" id="name" name="name" placeholder="Product.." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className={styles.col75}>
                        <select id="type" name="type">
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                            <option value="agricultural">Agricultural Product</option>
                        </select>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="sort">Sort</label>
                    </div>
                    <div className={styles.col75}>
                        <input type="text" id="sort" name="sort" placeholder="Product sort.." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="imageUrl">Add image</label>
                    </div>
                    <div className={styles.col75}>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="company">Company</label>
                    </div>
                    <div className={styles.col75}>
                        <input type="text" id="company" name="company" placeholder="Company name.." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="price">Price per kg.</label>
                    </div>
                    <div className={styles.col75}>
                        <input type="text" id="price" name="price" placeholder="Price" disabled={checked} />
                    </div>
                    <input className={styles.check} type="checkbox" id="negotiable" name="negotiable" value="negotiable" onChange={onCheckChange} />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label>
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};