import React from "react"
import "./Header.css"
import {
  SupervisorAccount,
  HomeOutlined,
  SearchOutlined,
  BusinessCenter,
  Chat,
  Notifications,
} from "@mui/icons-material"
import HeaderOption from "./HeaderOption"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "./features/userSlice"
import { auth } from "./firebase"

const Header = () => {
  const user = useSelector(selectUser)


  const dispatch = useDispatch()

  const logoutOfApp = ()=>{
    dispatch(logout({}))
    auth.signOut()
  }

  const header = [
    { title: "Home", Icon: HomeOutlined },
    { title: "Network", Icon: SupervisorAccount },
    { title: "Jobs", Icon: BusinessCenter },
    { title: "Messaging", Icon: Chat },
    { title: "Notifications", Icon: Notifications },
    {
      title: user?.displayName,
      avatar: true,
      onClick: logoutOfApp,
    },
  ]

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchOutlined />
          <input type="text" placeholder="search..." />
        </div>
      </div>

      <div className="header_right">
        {header.map((h) => (
          <HeaderOption
            key={h.title}
            title={h.title}
            Icon={h.Icon}
            avatar={h.avatar}
            onClick={h.onClick ? h.onClick : null}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
