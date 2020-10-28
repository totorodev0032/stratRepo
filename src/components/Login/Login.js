import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className = {styles.login_container}>
            <div className = {styles.login_box}>
                <div className = {styles.content_wrapper}>
                    <div className = {styles.up}>
                        <p> StratRepo </p>
                    </div>
                    <div className = {styles.down}>
                        <input text = "type" placeholder =" Enter Your Email "  />
                        <input text = "type" placeholder =" Password "  />
                        <button>Login</button>
                        <p>New here? <span> <Link to = '/register'>Signup</Link></span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
