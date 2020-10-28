import React from 'react';
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
                        <p>New here? Signup</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
