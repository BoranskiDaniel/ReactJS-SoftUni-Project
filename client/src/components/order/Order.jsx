import styles from "./Order.module.css"

import { useForm } from "../../hooks/useForm";

export default function Order({ name, company, closeHandler }) {
    const { formValues, onChangeHandler, onSubmit } = useForm({ quantity: '', email: '', delivery: '' })
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
                        value={formValues.quantity}
                        onChange={onChangeHandler}
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
                        value={formValues.email}
                        onChange={onChangeHandler}
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
                        value={formValues.delivery}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Order</button>
                    <button type="button" onClick={closeHandler}>Close</button>
                </div>
            </form>
        </div>
    );
}