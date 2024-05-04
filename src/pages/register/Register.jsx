import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "../../components/button/Button";
import './register.less';
import EmailInput from "../../components/InputFields/EmailInput/EmailInput";
import PasswordInput from "../../components/InputFields/PasswordInput/PasswordInput";
import UsernameInput from '../../components/InputFields/UserNameInput/UserNameInput';
import '../../components/InputFields/EmailInput/EmailInput.less';

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = (e) => {
        e.preventDefault();
        const { name, email, password } = user;
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        axios.post("http://localhost:6969/Register", user)
            .then(res => console.log(res))
            .catch(error => console.error(error));
    };

    return (
        <div className="register-container">
            <div className="register-heading">Create a new account</div>
            <div className="register-form">
                <form autoComplete="off" onSubmit={register}>
                    <UsernameInput value={user.name} handleChange={handleChange} />
                    <EmailInput value={user.email} handleChange={handleChange} />
                    <PasswordInput value={user.password} handleChange={handleChange} />
                    <div className="button-container">
                        <Button>Register</Button>
                    </div>
                </form>
            </div>
            <div className="sign-in-link">
                Already have an account? <Link to="/login">Sign In</Link>
            </div>
        </div>
    );
}

export default Register;
