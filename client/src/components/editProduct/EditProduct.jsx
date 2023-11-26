import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import styles from "../editProduct/EditProduct.module.css"
export default function EditProduct() {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [product, setProduct] = useState({
        product: '',
        type: '',
        sort: '',
        imageUrl: '',
        company: '',
        email: '',
        price: '',
    })

    useEffect(() => {
        productService.getOne(_id)
            .then(result => {
                setProduct(result);
            });
    }, [_id]);

    const editProductHandler = async (values) => {
        try {
            await productService.edit(_id, values);

            navigate('/products');
        } catch (err) {
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(editProductHandler, product)

    console.log(product);

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="product">Product:</label>
                    </div>
                    <div className={styles.col75}>
                        <input
                            className={styles.textField}
                            type="text"
                            id="product"
                            name="product"
                            placeholder="Product"
                            value={product.product}
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
                        value="negotiable"
                        onChange={onCheckChange}
                    />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label> */}
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}