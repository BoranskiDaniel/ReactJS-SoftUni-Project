import styles from "./Order.module.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Order({ name, company, closeHandler }) {
    const [values, setFormValues] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const orderSubmitHandler = () => {
        console.log("Your order has been send!")
        // navigate('/products')
    }

    return (
        <div className={styles.backdrop} >
            <form className={styles.mainOrder} onSubmit={onSubmit}>
                <h1>{name}</h1>
                <h4>{company}</h4>
                <div>
                    <label className={styles.label} htmlFor="quantity ">Quantity: (kg.)</label>
                    <input
                        style={{ width: '300px', marginLeft: '20px' }}
                        type="number"
                        id="quantity"
                        name="quantity"
                        // value={values}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="email ">Your email:</label>
                    <input
                        style={{ width: '300px', marginLeft: '20px' }}
                        type="text"
                        id="email"
                        name="email"
                        // value={values}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="delivery">Delivery address:</label>
                    <input
                        style={{ width: '300px', marginLeft: '20px' }}
                        type="text"
                        id="delivery"
                        name="delivery"
                        // value={values}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <button type="button" onClick={closeHandler && orderSubmitHandler}>Order</button>
                    <button type="button" onClick={closeHandler}>Close</button>
                </div>
            </form>
        </div>
    );
}