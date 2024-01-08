import { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../../contex/AuthContext"

import styles from './LoginForm.module.css';
import useForm from '../../hooks/useForm';

const formInitialState = {
    email: "",
    password: "",
};

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};
export default function LoginForm({
}) {
    const { loginSubmitHandler } = useContext(AuthContext);
    const initialValues = useMemo(() => ({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }), []);
    const { values, onChange, onSubmit, resetFormHandler } = useForm(loginSubmitHandler, initialValues)
    const emailInputRef = useRef();
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        emailInputRef.current.focus();
    }, []);

    const simpleValidator = () => {
        if (formValues.email === "" || formValues.password === "") {
            setErrors(state => ({
                ...state,
                email: "You must enter correct email and password!",
            }));
        } else {
            setErrors(state => ({ ...state, email: "" }));
            resetFormHandler();
        }
    }

    const resetHandler = () => {
        setErrors(state => ({ ...state, email: "" }));
        resetFormHandler();
    }

    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        ref={emailInputRef}
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        placeholder='example@abc.de'
                        onChange={onChange}
                        className={errors.email && styles.inputError}
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                        className={errors.email && styles.inputError}
                    />
                    {errors.email && (
                        <p className={styles.errorMessage}>{errors.email}</p>
                    )}
                </div>
                <div>
                    <button type="submit" onClick={simpleValidator}> Login</button>
                    <button type="button" onClick={resetHandler}>Reset</button>
                </div>
                <div >
                    <p className={styles.noAccount}>You don't have an account? <Link to="/register"> Register</Link></p>
                </div>
            </form>
        </div>
    );
}