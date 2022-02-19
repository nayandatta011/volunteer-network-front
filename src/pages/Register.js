import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Utilities/logos/logo.png';


const Register = () => {
    return (
        <div className="register__wrapper">
            <div className="container">
                <div className="regis__wrap">
                    <div className="logo__top">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="regis__content">
                        <h2>Register as a Volunteer</h2>
                        <form className='regis__form' action="" >
                            <input type="text" className='name' placeholder='Full Name' />
                            <input type="email" className='email' placeholder='Enter email address' />
                            <input type="text" className='desc' placeholder='Description of the event' />
                            <input type="submit" className='regi__btn' value="Registration" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;