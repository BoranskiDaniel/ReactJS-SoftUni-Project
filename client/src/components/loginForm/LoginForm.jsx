import { useState, useRef, useEffect } from 'react';

import styles from './LoginForm.module.css';

const formInitialState = {
    username: '',
    password: '',
};
export default function LoginForm({
    // formRef,
}) {
    // const usernameInputRef = useRef();
    // const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    // const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     usernameInputRef.current.focus();
    // }, []);

    // Executes only on update
    // useEffect(() => {
    //     if (!isMountedRef.current) {
    //         isMountedRef.current = true;
    //         return;
    //     }
    // }, [formValues]);

    const changeHandler = (e) => {
        setFormValues(e.target.value);
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        // setErrors({});
        console.log(formValues);
    };

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     resetFormHandler();
    // };

    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>

            <form /*</div>ref={formRef} onSubmit={submitHandler}*/>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        // ref={usernameInputRef}
                        type="text"
                        value={formValues.username}
                        onChange={changeHandler}
                    // onBlur={() => console.log('onBlur')}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
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