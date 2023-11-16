import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from './LoginForm.module.css';

const formInitialState = {
    username: "",
    password: "",
};
export default function LoginForm({
    // formRef,
}) {
    const usernameInputRef = useRef();
    // const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    // useEffect(() => {
    //     if (!isMountedRef.current) {
    //         isMountedRef.current = true;
    //         return;
    //     }
    // }, [formValues]);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        if (formValues.username === "" || formValues.password === "") {
            e.preventDefault();
            setErrors(state => ({
                ...state,
                username: "You must enter username and password"
            }));
        } else {
            e.preventDefault();
            console.log(formValues);
            resetFormHandler();
        }
    };
    const simpleValidator = () => {
        if (formValues.username === "" || formValues.password === "") {
            setErrors(state => ({
                ...state,
                username: "You must enter username and password",
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: "" }));
            }
        }
    }
    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>

            <form /*</div>ref={formRef} */>
                <div>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={simpleValidator}
                        className={errors.username && styles.inputError}
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                        onBlur={simpleValidator}
                        className={errors.username && styles.inputError}
                    />
                    {errors.username && (
                        <p className={styles.errorMessage}>{errors.username}</p>
                    )}
                </div>
                <div>
                    <button onClick={submitHandler}> Login</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
                <div >
                    <p className={styles.noAccount}>You don't have an account? <Link to="/register"> Register</Link></p>
                </div>
            </form>
        </div>
    );
}