import React from 'react';
import {Link } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
    return (
        <div className = {styles.signup_container}>
            <div className = {styles.signup_box}>
                <div className = {styles.content_wrapper}>
                    <div className = {styles.up}>
                        <p> StratRepo </p>
                    </div>
                    <div className = {styles.down}>
                        <input text = "type" placeholder =" User_name "  />
                        <input text = "type" placeholder =" first_name"  />
                        <input text = "type" placeholder =" last_name"  />
                        <input text = "type" placeholder =" Email"  />
                        <input text = "type" placeholder =" Password "  />
                        <button>Register</button>
                        <p>Already Have account? <span> <Link to = '/login'>Login</Link></span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
