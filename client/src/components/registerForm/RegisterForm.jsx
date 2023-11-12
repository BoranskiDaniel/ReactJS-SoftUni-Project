import { useState, useRef, useEffect } from 'react';

import styles from './RegisterForm.module.css';

const formInitialState = {
    username: '',
    company: '',
    password: '',
    repeatPassword: '',
};
export default function RegisterForm({
    formRef
}) {
    const usernameInputRef = useRef();
    const companyInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState([formInitialState]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);
    useEffect(() => {
        companyInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        // console.log('Form is updated')
    }, [formValues]);

    const changeHandler = (e) => {
        let value = '';

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    };

    return (
        <div className={styles.registerForm}>
            <h1>Register</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input className={styles.inputText}
                        ref={usernameInputRef}
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}
                    // onBlur={() => console.log('onBlur')}
                    />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input className={styles.inputText}
                        ref={companyInputRef}
                        type="text"
                        id="company"
                        name="company"
                        value={formValues.company}
                        onChange={changeHandler}
                    // onBlur={() => console.log('onBlur')}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className={styles.inputText}
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <input className={styles.inputText}
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formValues.repeatPassword}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <button type="submit" >Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </div>
    );
}