import LoginForm from "../../features/auth/LoginForm/LoginForm.jsx";
import "./LoginPage.css"

function LoginPage() {
    return (
        <main>
            <div className="login-grid">
                <div className='login-img'>
                    <h1>WELCOME</h1>
                    <p>hello</p>
                </div>
                <LoginForm />
            </div>

        </main>
    );
}

export default LoginPage;