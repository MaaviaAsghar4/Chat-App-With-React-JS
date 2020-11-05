import React from 'react'
import './Header.css'
import Logo from '../../images/chatLogo.png'

const Header = () => {
    return (
        <div className='chat-head'>
            <h1 className='chat-header'>Welcome to Chit Chat</h1>
            <img className='chat-img' src={Logo} alt='Logo'/>
        </div>
    )
}

export default Header
