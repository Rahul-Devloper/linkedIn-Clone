import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css'

const SideBar = () => {

    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return <>
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://www.prestonmarket.com.au/wp-content/uploads/2021/02/abstract-background_53876-43362.jpg" alt="linkedIn-background" />
            <Avatar src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY2WJcq5Kc6dBwxsOG1d0ThNAuBifIMt7rbSMEGCaDp7TdA2_Hgw5cXLQT9cCnirO4X4&usqp=CAU' className='sidebar_avatar' />
            <h2>Rahul Ramesh</h2>
            <h4>Developer</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">
                    3,443
                </p>
            </div>
            <div className="sidebar_stat">
            <p>Views on Post</p>
                <p className="sidebar_statNumber">
                    2,443
                </p>
            </div>
        </div>
        <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('coding')}
                {recentItem('software')}
        </div>
    </div>
  </>;
};

export default SideBar;
