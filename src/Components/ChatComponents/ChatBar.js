import React, { useEffect, useState } from 'react'
import './ChatBar.css'
import Logo from '../../images/chatLogo.png'
import Image from '../../images/images.png'
import { connect } from 'react-redux'
import firebase from '../../Config/firebase'
import { get_userMessages } from '../../Store/action'

const ChatBar = (props) => {
    let chatuser = props.chatuser
    let user = props.user
    let [message, setMessage] = useState('')
    let [messageObj, setMessageObj] = useState([{}])
    let mergeUid = ''
    console.log(props.messageReducer)
    let getMessages = () => {
        // messageObj.push({
        //     messageSender: user.displayName,
        //     senderPhoto: user.photoURL,
        //     senderUid: user.uid,
        //     message: message
        // })
        mergeUid = uidMerge(user.uid, chatuser.userUid)
        firebase.database().ref(`/chat/${mergeUid}`).push({
            messageSender: user.displayName,
            senderPhoto: user.photoURL,
            senderUid: user.uid,
            message: message
        })
        messageObj[0] = props.messageReducer
        setMessageObj(messageObj)
        console.log(messageObj)

        setMessage('')
    }
    let uidMerge = (uid1, uid2) => {
        if (uid1 > uid2) {
            return uid2 + uid1
        } else {
            return uid1 + uid2
        }
    }

    useEffect(() => {
        props.get_userMessages(mergeUid)
    }, [])

    return (
        <div className='chatbar-container'>
            <header className='chat-top'>
                <h1 className='chat-header'>Lets Chit Chat</h1>
                <img className='chat-logo' src={Logo} alt='' />
            </header>
            <div className='chatuser-container'>
                <h2 className='chatuser-name'>{chatuser.userName ? chatuser.userName : 'Name'}</h2>
                <img className='chatuser-img' src={chatuser.userName ? chatuser.userPhoto : Image} alt='' />
            </div>
            <div className='usermessage-container'>
                {
                    messageObj.map((v, i) => {
                        console.log(v.message)
                        return (v.senderUid &&
                            <div className={v.senderUid === user.uid ? 'sender-message' : 'reciever-message'} key={i}>
                                <img src={v.senderPhoto} width={20} alt='' />
                                <span>{v.senderUid === user.uid ? 'You:' : `${v.messageSender}:`} {v.message}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className='send-container'>
                <input className='send-input' value={message} type='text' onChange={(e) => { setMessage(e.target.value) }} />
                <button className='send-btn' onClick={getMessages}>Send</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    chatuser: state.chatuser.user,
    messageReducer: state.messageReducer.fbMessage
})

const mapDispatchToProps = dispatch => ({
    get_userMessages: (mergeUid) => dispatch(get_userMessages(mergeUid))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar)
