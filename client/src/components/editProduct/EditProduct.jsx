import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from "../../services/productService";
import styles from "../editProduct/EditProduct.module.css";
import useForm from "../../hooks/useForm";

export default function EditProduct() {
    const navigate = useNavigate();
    const { productId } = useParams();
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
        productService.getOne(productId)
            .then(result => {
                setProduct(result);
            });
    }, [productId]);


    const editProductHandler = async (values) => {
        try {
            await productService.edit(productId, values);

            navigate('/products');
        } catch (err) {
            console.log(err);
        }
    };

    const { values, onChange, onSubmit } = useForm(editProductHandler, product);

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
                            name="name"
                            placeholder="Product"
                            value={values.name}
                            onChange={onChange}
                        // required
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label htmlFor="type">Type:</label>
                    </div>
                    <div className={styles.col75}>
                        <select className={styles.selectType} id="type" onChange={onChange} value={values.type} name="type">
                            <option> Vegetable</option>
                            <option> Fruit</option>
                            <option> Agricultural Product</option>
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
                            value={values.sort}
                            onChange={onChange}
                        // required
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
                            value={values.imageUrl}
                            onChange={onChange}
                        // required
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
                            value={values.company}
                            onChange={onChange}
                        // required
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
                            value={values.email}
                            onChange={onChange}
                        // required
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
                            value={values.price}
                            onChange={onChange}
                        // disabled={checked}
                        // required
                        />
                    </div>
                    <input
                        className={styles.check}
                        type="checkbox"
                        id="negotiable"
                        name="negotiable"
                        value={values.negotiable}
                        onChange={onChange}
                    />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label>
                </div>
                <div className={styles.row}>
                    <input type="submit" value="Edit Product" />
                </div>
            </form>
        </div>
    );
}