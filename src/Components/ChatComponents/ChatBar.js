import React from 'react'
import './ChatBar.css'
import Logo from '../../images/chatLogo.png'
import Image from '../../images/images.png'

const ChatBar = () => {
    return (
        <div className='chatbar-container'>
            <header className='chat-top'>
                <h1 className='chat-header'>Lets Chit Chat</h1>
                <img className='chat-logo' src={Logo} alt='' />
            </header>
            <div className='chatuser-container'>
                <h2 className='chatuser-name'>Name</h2>
                <img className='chatuser-img' src={Image} alt='' />
            </div>
            <div className='usermessage-container'>
                <div className='sender-message'>
                    <span>Message</span>
                </div>
                <div className='reciever-message'>
                    <span>Message</span>
                </div>
            </div>
            <div className='send-container'>
                <input className='send-input' type='text' />
                <button className='send-btn'>Send</button>
            </div>
        </div>
    )
}

export default ChatBar
