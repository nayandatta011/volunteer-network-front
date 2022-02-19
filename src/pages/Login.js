import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Utilities/logos/logo.png';

const Login = () => {
    return (
        <div className="login__wrapper">
            <div className="container">
                <div className="login__wrap">
                    <div className="logo__top">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="login__content">
                        <h2>Login With</h2>
                        <div className='g__signin'>
                            <button className='google__login__btn'><i class="fa-brands fa-google"></i> Continue with Google</button>
                        </div>
                        <div>
                            <p>Don't have an account? <span className='login__span'><Link to="/register">Create an account</Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;