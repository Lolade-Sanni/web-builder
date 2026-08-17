import SignupForm from "../../features/auth/SignupForm/SignupForm.jsx";
import "./SignupPage.css";

function SignupPage() {
    return (
        <main className="signup-page">
            <div className="signup-grid">

                <div className="signup-img">
                    <h1>BUILD SOMETHING GREAT</h1>

                    <p>
                        Create your account and start building
                        beautiful websites without writing code.
                    </p>
                </div>

                <SignupForm />

            </div>
        </main>
    );
}

export default SignupPage;