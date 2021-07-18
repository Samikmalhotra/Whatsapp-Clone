import { Avatar } from '@material-ui/core'
import React from 'react'
import '../CSS/sidebarchat.css'

const SidebarChat = () => {
    return (
        <div className="sidebar-chat">
            <Avatar/>
            <div className="sidebar-chat-info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
