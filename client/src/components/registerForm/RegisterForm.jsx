import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from './RegisterForm.module.css';

const formInitialState = {
    username: '',
    company: '',
    password: '',
    repeatPassword: '',
};
export default function RegisterForm({
}) {
    const usernameInputRef = useRef();
    const [formValues, setFormValues] = useState([formInitialState]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

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
        if (
            formValues.username === "" ||
            formValues.company === "" ||
            formValues.password === "" ||
            formValues.repeatPassword === ""
        ) {
            e.preventDefault();
            setErrors(state => ({
                ...state,
                username: "All of the fields are required!",
                company: "All of the fields are required!",
                password: "All of the fields are required!",
                repeatPassword: "All of the fields are required!",
            }));
        } else {
            e.preventDefault();
            console.log(formValues);
            resetFormHandler();
        }
    };

    const simpleValidation = () => {
        if (
            formValues.username === "" ||
            formValues.company === "" ||
            formValues.password === "" ||
            formValues.repeatPassword === ""
        ) {
            setErrors(state => ({
                ...state,
                username: "All of the fields are required!",
                company: "All of the fields are required!",
                password: "All of the fields are required!",
                repeatPassword: "All of the fields are required!",
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: "" }));
            }
        }
    }

    return (
        <div className={styles.registerForm}>
            <h1>Register</h1>

            <form>
                <div>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input className={errors.username && styles.inputError}
                        ref={usernameInputRef}
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="company">Company</label>
                    <input className={errors.username && styles.inputError}
                        type="text"
                        id="company"
                        name="company"
                        value={formValues.company}
                        onChange={changeHandler}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={errors.username && styles.inputError}
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="repeatPassword">Repeat password</label>
                    <input className={errors.username && styles.inputError}
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formValues.repeatPassword}
                        onChange={changeHandler}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                {errors.username && (
                    <p className={styles.errorMessage}>{errors.username}</p>
                )}
                <div>
                    <button onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
                <div >
                    <p className={styles.haveAccount}>Already have an account? <Link to="/login"> Login</Link></p>
                </div>
            </form>
        </div>
    );
}