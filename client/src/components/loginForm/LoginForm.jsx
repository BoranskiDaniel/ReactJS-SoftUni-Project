import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import * as userService from "../../services/userService"

import styles from './LoginForm.module.css';

const formInitialState = {
    username: "",
    password: "",
};
export default function LoginForm({
    setCurrentForm
}) {
    const usernameInputRef = useRef();
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);
    useEffect(() => {
        userService.login()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
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
        if (formValues.username === "" || formValues.password === "") {
            e.preventDefault();
            setErrors(state => ({
                ...state,
                username: "You must enter username and password!",
                password: "You must enter username and password!",
            }));
        } else {
            e.preventDefault();
            // setCurrentForm(true)
            console.log(formValues);
            resetFormHandler();
        }
    };
    const simpleValidator = () => {
        if (formValues.username === "" || formValues.password === "") {
            setErrors(state => ({
                ...state,
                username: "You must enter username and password!",
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

            <form>
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
                    <button type="submit" onClick={submitHandler}> Login</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
                <div >
                    <p className={styles.noAccount}>You don't have an account? <Link to="/register"> Register</Link></p>
                </div>
            </form>
        </div>
    );
}