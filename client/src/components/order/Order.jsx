import styles from "./Order.module.css"

export default function Order() {
    return (
        <form>
            <div>
                <label className={styles.label} htmlFor="username">Username</label>
                <input className={errors.username && styles.inputError}
                    ref={usernameInputRef}
                    type="text"
                    id="username"
                    name="username"
                    value="username"
                    required
                />
            </div>
            <div>
                <label className={styles.label} htmlFor="company">Company</label>
                <input className={errors.username && styles.inputError}
                    type="text"
                    id="company"
                    name="company"
                    value="company"
                    required
                />
            </div>
            <div>
                <button type="submit" onClick={submitHandler}>Register</button>
                <button type="button" onClick={resetFormHandler}>Reset</button>
            </div>
        </form>
    );
}