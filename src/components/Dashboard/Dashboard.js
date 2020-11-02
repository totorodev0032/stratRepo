import React from 'react';
import {NavLink } from 'react-router-dom';
import styles from './Dashboard.module.css';
import * as Unicons from '@iconscout/react-unicons';

const Dashboard = () => {
    return (
        <>
           <div className = {styles.dashboard_wrapper}>
               <div className = {styles.nav_wrapper}>
                    <div className = {styles.logo}>
                        <h3>StratRepo</h3>
                    </div>
                    
                    <div className = {styles.nav_area}>
                    <NavLink to = '/' style = {{ textDecoration:'none', color:'black' }}>
                        <div className = {styles.nav_element}>
                            <Unicons.UilHome/>
                            <p>Strat</p>
                        </div>
                    </NavLink>


                     
                     <NavLink to = '/' style = {{ textDecoration:'none', color:'black' }}>
                         <div className = {styles.nav_element}>
                            <Unicons.UilUserCheck />
                            <p>Friends</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to = '/' style = {{ textDecoration:'none', color:'black' }}>
                        <div className = {styles.nav_element}>
                            <Unicons.UilUsersAlt />
                            <p>Teams</p>
                        </div>
                    </NavLink>
                    
                    <NavLink to = '/' style = {{ textDecoration:'none', color:'black' }}>
                        <div className = {styles.nav_element}>
                            <Unicons.UilUser />
                            <p>Profile</p>
                        </div>
                    </NavLink>

                    <NavLink to = '/' style = {{ textDecoration:'none', color:'black',marginTop:'auto' }}>
                        <div className = {styles.nav_element} >
                            <Unicons.UilSignout/>
                            <p>Logout</p>
                        </div>
                    </NavLink>
                    </div>
               </div>
               <div className = {styles.section_wrapper}>

               </div>
           </div> 
        </>
    )
}

export default Dashboard
