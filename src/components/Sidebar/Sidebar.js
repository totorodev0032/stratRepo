import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title : 'Strat',
        path: '/strategy',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title : 'Friends',
        path: '/friends',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title : 'My Profile',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title : 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title : 'Logout',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title : 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },
]