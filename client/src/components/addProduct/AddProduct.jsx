import styles from "./AddProduct.module.css";
import * as productService from "../../services/productService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function AddProduct() {
    const navigate = useNavigate();
    const usernameInputRef = useRef();
    const [checked, setChecked] = useState(false);
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
        usernameInputRef.current.focus();
    }, []);

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

    const onCheckChange = () => {
        setChecked(!checked);
    };

    const onChange = (e) => {
        setProduct(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
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
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={onChange}
                            placeholder="Product name"
                            required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="type">Type:</label>
                    </div>
                    <div className={styles.col75}>
                        <select className={styles.selectType} id="type" name="type" onChange={onChange}>
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
                            value={product.sort}
                            onChange={onChange}
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
                            value={product.imageUrl}
                            onChange={onChange}
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
                            value={product.company}
                            onChange={onChange}
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
                            value={product.email}
                            onChange={onChange}
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
                            value={product.price}
                            onChange={onChange}
                            disabled={checked}
                            required
                        />
                    </div>
                    <input
                        className={styles.check}
                        type="checkbox"
                        id="negotiable"
                        name="negotiable"
                        value={product.negotiable}
                        onChange={onCheckChange}
                    />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label>
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};