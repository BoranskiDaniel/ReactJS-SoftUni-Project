import { useState } from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
        
        console.log(formValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    };
};
