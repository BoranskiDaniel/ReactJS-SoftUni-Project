import { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { Link } from "react-router-dom";
import useForm from '../../hooks/useForm';

import styles from './RegisterForm.module.css';
import AuthContext from '../../contex/AuthContext';

const RegisterFormKeys = {
    Email: 'email',
    Company: 'company',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};
export default function RegisterForm({
}) {
    const { registerSubmitHandler } = useContext(AuthContext);
    const initialValues = useMemo(() => ({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Company]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    }), []);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, initialValues);
    const usernameInputRef = useRef();
    const [errors, setErrors] = useState({});


    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    const resetFormHandler = () => {
        setErrors({});
    };

    const submitHandler = (e) => {
        if (
            RegisterFormKeys.Email === '' ||
            RegisterFormKeys.Company === '' ||
            RegisterFormKeys.Password === '' ||
            RegisterFormKeys.ConfirmPassword === ''
        ) {
            e.preventDefault();
            setErrors(state => ({
                ...state,
                username: "All of the fields are required!",
            }));
        } else {
            e.preventDefault();
            resetFormHandler();
        }
    };

    const simpleValidation = () => {
        if (
            RegisterFormKeys.Email === '' ||
            RegisterFormKeys.Company === '' ||
            RegisterFormKeys.Password === '' ||
            RegisterFormKeys.ConfirmPassword === ''
        ) {
            setErrors(state => ({
                ...state,
                username: "All of the fields are required!",
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: "" }));
            }
        }
    }

    // const passwordValidation = () => {
    //     if (formValues.password === formValues.repeatPassword) {
    //         console.log('good');

    //     } else {
    //         console.log("not good");
    //     }
    // }
    return (
        <div className={styles.registerForm}>
            <h1>Register</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={errors.username && styles.inputError}
                        ref={usernameInputRef}
                        type="email"
                        id="email"
                        name="email"
                        placeholder='example@abc.de'
                        value={values[RegisterFormKeys.Email]}
                        onChange={onChange}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="company">Company:</label>
                    <input className={errors.username && styles.inputError}
                        type="text"
                        id="company"
                        name="company"
                        value={values[RegisterFormKeys.Company]}
                        onChange={onChange}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input className={errors.username && styles.inputError}
                        type="password"
                        id="password"
                        name="password"
                        value={values[RegisterFormKeys.Password]}
                        onChange={onChange}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="confirm-password">Confirm password:</label>
                    <input className={errors.username && styles.inputError}
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        onChange={onChange}
                        onBlur={simpleValidation}
                        required
                    />
                </div>
                {errors.username && (
                    <p className={styles.errorMessage}>{errors.username}</p>
                )}
                <div>
                    <button type="submit" /*onClick={submitHandler}*/>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
                <div >
                    <p className={styles.haveAccount}>Already have an account? <Link to="/login"> Login</Link></p>
                </div>
            </form>
        </div>
    );
}