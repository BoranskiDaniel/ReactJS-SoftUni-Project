import styles from "./Order.module.css"

import { useForm } from "../../hooks/useForm";

export default function Order({ closeHandler }) {
    const { formValues, onChangeHandler, onSubmit } = useForm({ text: "" })
    return (
        <div className={styles.backdrop} onClick={closeHandler} >
            <form className={styles.mainOrder} onSubmit={onSubmit}>
                <div>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.name}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formValues.name}
                        onChange={onChangeHandler}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={closeHandler}>Close</button>
                </div>
            </form>
        </div>
    );
}