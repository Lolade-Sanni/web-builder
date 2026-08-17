import { useState } from 'react';
import {Link} from 'react-router-dom';
import "./LoginForm.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            password
        });
    };

    return (
        <div className="login-form" >
            <Link to={"/"} className='return-link'>Back to home ↲</Link>
            <h1>LOGIN</h1>
            <p>Please fill in the details below to get you started</p>
            <form onSubmit={handleSubmit}>
                <label className="login-form-label">Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">
                    Login
                </button>
                <div className="links-div">
                    <Link to="..." className="forgot-password-link">Forgot Password?</Link>
                    <Link to="/signup" className="create-account-link">Create an account</Link>
                </div>

            </form>
        </div>

    );
};

export default LoginForm;