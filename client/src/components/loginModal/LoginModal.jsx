import { useState, useRef, useEffect } from 'react';

import styles from './LoginForm.module.css';

const formInitialState = {
    username: '',
    password: '',
};
export default function LoginModal({
    formRef,
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
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
        <div className={styles.loginForm}>
            <h1>Login</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                {/* <button className={styles.btnClose}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                        className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                        <path fill="currentColor"
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                        </path>
                    </svg>
                </button> */}
                <div>
                    <label htmlFor="username">Username</label>
                    <input
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    {/* <button type="submit" disabled={Object.values(errors).some(x => x)}>Login</button> */}
                    <button>Login</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </div>
    );
}