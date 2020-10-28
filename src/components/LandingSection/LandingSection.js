import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './LandingSection.module.css';

const LandingSection = () => {
    return (
        <>
          <div className = {styles.main_container}>
            <Navbar/>
            <div className = {styles.parent_content}>
                <div className = {styles.left}>
                    <div className = {styles.left_content}>
                        <p className = {styles.heading}> Control your Game <span style = {{color:'#D30062'}}>Strategy </span > and <span style = {{color:'#D30062'}}>Activity </span> </p>
                        <p className = {styles.text}>mus mauris vitae ultricies leo integer malesuad nunc vel risus</p>
                        <div className = {styles.input_section}>
                            <input type = "text" placeholder = "Enter Your Email" />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className = {styles.right}>

                </div>
            </div>
          </div>  
        </>
    )
}

export default LandingSection
