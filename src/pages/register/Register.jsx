import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
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
        if (name && email && password) {
            axios.post("http://localhost:6969/Register", user)
                .then(res => console.log(res))
                .catch(error => console.error(error));
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div className="register-container">
            <div className="register-heading">Create a new account</div>
            <div className="register-form">
                <form>
                    <div className="input-field">
                        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="FullName"/>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
                    </div>
                    <div className="button-container">
                        <button className="btn-register" onClick={register}>Register</button>
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
