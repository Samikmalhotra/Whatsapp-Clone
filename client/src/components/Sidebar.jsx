import React from 'react'
import '../CSS/sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVerticon from '@material-ui/icons/MoreVert'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat.jsx'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src="https://avatars.githubusercontent.com/u/72279316?v=4"/>
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>  
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>                  
                    <IconButton>
                        <MoreVerticon/>
                    </IconButton>
                </div>
            </div>
        <div className="sidebar-search">
            <div className="sidebar-search-container">
                <SearchOutlined/>
                <input placeholder="Search or start a new chat" type="text"/>
            </div>
        </div>
        <div className="sidebar-chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>

        </div>
        </div>
    )
}

export default Sidebar
