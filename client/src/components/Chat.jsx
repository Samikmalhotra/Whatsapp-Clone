import React from 'react'
import '../CSS/chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>
                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>  
                    <IconButton>
                        <AttachFile/>
                    </IconButton>                  
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message chat-reciever">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat-message">
                    <span className="chat-name">Sam</span>
                    This is a message
                    <span className="chat-timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input
                        // value={input}
                        // onChange={(e)=>setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button 
                        // onClick={sendMessage} 
                        type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
