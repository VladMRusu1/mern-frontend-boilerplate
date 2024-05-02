import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "../../components/button/Button";
import './register.less';

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
        console.log(e.target.name.value);
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
                    <div className="input-field">
                        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                    </div>
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
