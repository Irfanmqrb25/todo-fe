import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLoginHook';
// import { Slide, ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const Login = async (e) => {
        e.preventDefault();
        await login(email, password)
    }

    return (
        <div className='register-container'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='form-register' onSubmit={Login}>
                <h3>Login Here</h3>
                <label>Email*</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password*</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isLoading} type='submit'>Login</button>
                <p>Don't have an account? <Link to={'/register'}>register here</Link></p>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
