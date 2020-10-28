import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className = {styles.nav_parent}>
            <div className = {styles.nav_wrapper}>
                <div className = {styles.logo_container}>
                    <h2> StratRepo </h2>
                </div>

                <div className = {styles.nav_container}>
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <Link to = '/login' style = {{textDecoration:'none'}}>
                    <div className = {styles.login_wrapper}>
                        <h3>Login</h3>
                    </div>
                    </Link>
                    
                    
                  
                </div>
            </div>
           
        </div>
    )
}

export default Navbar
