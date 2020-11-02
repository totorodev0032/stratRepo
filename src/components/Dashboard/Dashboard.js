import React, {useState} from 'react';
import styles from './Dashboard.module.css';
import FriendPage from '../../pages/FriendPage/FriendPage';
import StratPage from '../../pages/StratPage/StratPage';
import Nav from './Nav';

class Dashboard extends React.Component {
  
   
    
    render() {
        let active = <FriendPage/>
        
            
        return (
            <>
               <div className = {styles.dashboard_wrapper}>
               <div className = {styles.nav_wrapper}>
                   <Nav/>
                </div>
                
                   <div className = {styles.section_wrapper}>
                        <div className = {styles.friend_container}>
                            {active}
                        </div>
                   </div>
               </div> 
            </>
        )
    }
}

export default Dashboard
