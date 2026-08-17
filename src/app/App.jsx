import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from '../pages/HomePage/HomePage.jsx'
import LoginPage from "../pages/LoginPage/LoginPage.jsx"
import SignupPage from "../pages/SignupPage/SignupPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;