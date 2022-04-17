import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }



    return (
        <div className='container register-form'>
            <h2 className='text-info  my-2'>Please Register: </h2>
            <form onSubmit={handleRegister}>
                <input className='w-50' type="text" name="name" id="" placeholder='Your name' />
                <input className='w-50' type="email" name="email" id="" placeholder='Email Address' required />
                <input className='w-50' type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label className='ms-2' htmlFor="terms">Please Accept</label>
                <input
                    className='w-50  btn btn-info mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;