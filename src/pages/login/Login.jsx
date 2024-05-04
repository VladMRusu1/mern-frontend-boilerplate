import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Button from "../../components/button/Button";
import './login.less';
import EmailInput from "../../components/InputFields/EmailInput/EmailInput";
import PasswordInput from "../../components/InputFields/PasswordInput/PasswordInput";
import '../../components/InputFields/EmailInput/EmailInput.less';
import '../../components/InputFields/PasswordInput/PasswordInput.less';
 

const Login = ({ setLoginUser }) => {
    const history = useNavigate();
    const [user, setUser] = useState({
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

    const login = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        if (!email || !password) {
            alert("Please fill in both email and password fields.");
            return;
        }
        axios.post("http://localhost:5173/Login", { email, password })
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                history("/");
            })
            .catch(error => console.error(error));
    };
    
    return (
        <div className="login-container">
            <div className="login-heading">Login To Your Account</div>
            <div className="login-form">
                <form autoComplete="off" onSubmit={login}>
                <EmailInput value={user.email} handleChange={handleChange} />
                <PasswordInput value={user.password} handleChange={handleChange} />
                    <div className="input-field">
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
            <div className="forgot-password-link">
                <Link to="/login/forgot_password">Forgot Your Password?</Link>
            </div>
            <div className="create-account-link">
                <span>You don't have an account?</span>
                <Link to="/account/register">Create One</Link>
            </div>
        </div>
    );
}

export default Login;