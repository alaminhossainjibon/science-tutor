import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = e => {
        navigate('/register');
    }
    return (
        <div className='container text-center w-50 mx-auto'>
            <h2 className='text-info text-center my-2'>Please Login: </h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50' ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <br />
                <input className='w-50' ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input
                    className='w-50 mx-auto btn btn-info mt-2'
                    type="submit"
                    value="Login" />
            </form>
            <p>You New User? <Link to="/register" className='text-info pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            {/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p> */}
        </div>
    );
};

export default Login;