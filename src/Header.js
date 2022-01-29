import React from 'react';
import './Header.css'
import {SupervisorAccount, HomeOutlined, SearchOutlined, BusinessCenter, Chat, Notifications} from '@mui/icons-material';
import HeaderOption from './HeaderOption';

const Header = () => {

    const header = [
        {title: 'Home', Icon: HomeOutlined },
        {title: 'Network', Icon: SupervisorAccount },
        {title: 'Jobs', Icon: BusinessCenter },
        {title: 'Messaging', Icon: Chat },
        {title: 'Notifications', Icon: Notifications },
        {title: 'Rahul', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgY2WJcq5Kc6dBwxsOG1d0ThNAuBifIMt7rbSMEGCaDp7TdA2_Hgw5cXLQT9cCnirO4X4&usqp=CAU' },

    ]

  return (
  <div className='header'>
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header_search">
            <SearchOutlined />
            <input type="text" />
        </div>
      </div>

      

      <div className="header_right">
        {header.map((h)=>(
            <HeaderOption key={h.title} title={h.title} Icon={h.Icon} avatar={h.avatar ? h.avatar : null} />
        ))}      
        </div>
  </div>
  )
};

export default Header;
