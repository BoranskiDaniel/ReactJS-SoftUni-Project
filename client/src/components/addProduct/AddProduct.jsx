import styles from "./AddProduct.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contex/AuthContext";

const addFormKeys = {
    name: 'name',
    type: 'type',
    sort: 'sort',
    imageUrl: 'imageUrl',
    company: 'company',
    email: 'email',
    price: 'price',
    negotiable: 'negotiable',
};


export default function AddProduct() {
    const navigate = useNavigate();
    const usernameInputRef = useRef();
    const [checked, setChecked] = useState(false);
    // const [product, setProduct] = useState(addFormKeys)

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    const { productCreateHandler } = useContext(AuthContext);

    const onCheckChange = () => {
        setChecked(!checked);
    };

    const { values, onChange, onSubmit } = useForm(productCreateHandler, {
        [addFormKeys.name]: "",
        [addFormKeys.type]: "",
        [addFormKeys.sort]: "",
        [addFormKeys.imageUrl]: "",
        [addFormKeys.company]: "",
        [addFormKeys.email]: "",
        [addFormKeys.price]: "",
        [addFormKeys.negotiable]: "",
    });

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
                            ref={usernameInputRef}
                            type="text"
                            id="name"
                            name="name"
                            value={values[addFormKeys.name]}
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
                            value={values[addFormKeys.sort]}
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
                            value={values[addFormKeys.imageUrl]}
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
                            value={values[addFormKeys.company]}
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
                            value={values[addFormKeys.email]}
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
                            value={values[addFormKeys.price]}
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
                        value={values[addFormKeys.negotiable]}
                        onChange={onCheckChange}
                    />
                    <label className={styles.check} htmlFor="negotiable"> Negotiable </label>
                </div>
                <div className={styles.row}>
                    <button onClick={productCreateHandler}> Add product </button>

                    {/* <input type="submit" value="Add Product" /> */}
                </div>
            </form>
        </div>
    );
}