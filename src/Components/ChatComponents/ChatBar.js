import React, { useState } from 'react'
import './ChatBar.css'
import Logo from '../../images/chatLogo.png'
import Image from '../../images/images.png'
import { connect } from 'react-redux'
import firebase from '../../Config/firebase'

const ChatBar = ({ user, chatuser }) => {
    let [message, setMessage] = useState('')
    let [messageObj, setMessageObj] = useState([])
    let mergeUid = ''
    let getMessages = () => {
        mergeUid = uidMerge(user.uid, chatuser.userUid)
        firebase.database().ref(`/chat/${mergeUid}`).push({
            messageSender: user.displayName,
            senderPhoto: user.photoURL,
            senderUid: user.uid,
            message: message
        })
        getuserMessages(mergeUid)

        setMessage('')
    }
    let uidMerge = (uid1, uid2) => {
        if (uid1 > uid2) {
            return uid2 + uid1
        } else {
            return uid1 + uid2
        }
    }

    let getuserMessages = mergeUid => {
        firebase.database().ref(`/`).child(`chat/${mergeUid}`).on('value', data => {

            let firebaseData = data.val()
            console.log(Object.values(firebaseData))
            // messageObj = [data.val()]
            // messageObj.push({
            //         messageSender: firebaseData.messageSender,
            //         senderPhoto: firebaseData.senderPhoto,
            //         senderUid: firebaseData.senderUid,
            //         message: firebaseData.message
            //     })
            messageObj = []
            messageObj.push(Object.values(firebaseData))
            setMessageObj(messageObj)
            console.log(messageObj)
        })
    }

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
                    messageObj.map((v) => {
                        return v.map((v,i) => {
                            return (v.senderUid &&
                                <div className={v.senderUid === user.uid ? 'sender-message' : 'reciever-message'} key={i}>
                                    <img src={v.senderPhoto} width={20} alt='' />
                                    <span>{v.senderUid === user.uid ? 'You:' : `${v.messageSender}:`} {v.message}</span>
                                </div>
                            )
                        })
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
})


export default connect(mapStateToProps, null)(ChatBar)
