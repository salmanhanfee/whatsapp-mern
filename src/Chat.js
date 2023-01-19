import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFile from '@mui/icons-material/AttachFile'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './Chat.css'
import MicIcon from '@mui/icons-material/Mic';
function Chat({messages}) {

  // const sendMessage = (e) => {
  //   e.preventDefault
  // }

  return (
    <div className='chat'>
    <div className="chat__header">
      <Avatar />  
      <div className="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last seen at...</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
    <div className="chat__body">
      {messages.map(message => (
    <p className={`chat__message ${message.received && "chat__receiver"}`}>
      <span className='chat__name'>{message.name}</span>
      {message.message}
      <span className="chat__timestamp">{message.timestamp}</span>
    </p>
      ))}
    
      {/* <p className='chat__message chat__receiver'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p> */}

    {/* <p className='chat__message chat__receiver'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p>

    <p className='chat__message'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p>

    <p className='chat__message'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p>

    <p className='chat__message chat__receiver'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p>

    <p className='chat__message'>
   <span className='chat__name'>sonny</span>
    This is a message
    <span className="chat__timestamp">{new Date().toUTCString()}
    </span>
    </p>*/}
    </div> 
    <div className="chat__footer">  
    <InsertEmoticonIcon />
    <form>
      <input placeholder="Type a message" 
        type="text"/>
      <button type="submit">  a </button>
    </form>
    <MicIcon />
    </div>
    </div>
  )
}

export default Chat