import { useState } from "react";

export const useForm = (submitHandler, initialValues) => {
    const [values, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const resetFormHandler = () => {
        setFormValues(initialValues);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values)
    };

    return {
        values,
        onChange,
        onSubmit,
        resetFormHandler
    };
};
