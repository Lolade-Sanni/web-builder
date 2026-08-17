import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css";
import { signup } from "../authService";
const SignupForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const userCredential = await signup(
                email,
                password
            );

            console.log("Account created:", userCredential.user);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="signup-form">

            <Link
                to="/"
                className="return-link"
            >
                Back to home ↲
            </Link>

            <h1>SIGN UP</h1>

            <p>
                Create your account to start building your website.
            </p>

            <form onSubmit={handleSubmit}>

                <div className="signup-form__name-row">

                    <label>
                        First Name

                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) =>
                                setFirstName(e.target.value)
                            }
                            required
                        />
                    </label>

                    <label>
                        Last Name

                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) =>
                                setLastName(e.target.value)
                            }
                            required
                        />
                    </label>

                </div>

                <label>
                    Email

                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />
                </label>

                <label>
                    Password

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />
                </label>

                <label>
                    Confirm Password

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />
                </label>

                <button type="submit">
                    Create Account
                </button>

            </form>

            <p className="signup-form__login">
                Already have an account?{" "}
                <Link to="/login">
                    Log in
                </Link>
            </p>

        </div>
    );
};

export default SignupForm;