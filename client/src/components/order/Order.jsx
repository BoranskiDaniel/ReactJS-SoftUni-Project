import styles from "./Order.module.css"

export default function Order() {
    return (
        <form className={styles.mainOrder}>
            <div>
                <label className={styles.label} htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value="username"
                    required
                />
            </div>
            <div>
                <label className={styles.label} htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value="company"
                    required
                />
            </div>
            <div>
                <button type="submit">Register</button>
                <button type="button">Reset</button>
            </div>
        </form>
    );
}