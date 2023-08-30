import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { Link } from 'react-router-dom';
import '../style/RegisterAndLoginPage.css'
// import { Slide, ToastContainer, toast } from 'react-toastify';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const Register = async (e) => {
        e.preventDefault();
        await signup(name, email, password)
    }


    return (
        <div className='register-container'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='form-register' onSubmit={Register}>
                <h3>Register Here</h3>
                <label>Username*</label>
                <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email*</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password*</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isLoading} type='submit'>Sign Up</button>
                <p>Already have an account? <Link to={'/login'}>Login Here.</Link></p>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default RegisterPage;
