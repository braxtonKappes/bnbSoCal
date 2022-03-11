import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
        async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        }
    );
};

    return (
    <div className="formContainer">
        <form className='loginForm' onSubmit={handleSubmit}>
            <ul className={errors.length > 0 ? "errorList" : "hideErrorList"}>
            {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
            ))}
            <h1>Are you sure you want to delete?</h1>
            <button className="loginButton" type="submit">Submit</button>
            <button className="cancelButton">Cancel</button>
            </ul>
        </form>
    </div>
    );
}

export default LoginForm;
