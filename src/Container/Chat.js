import React from 'react'
import { connect } from 'react-redux'
import ChatBar from '../Components/ChatComponents/ChatBar'
import Sidebar from '../Components/ChatComponents/Sidebar'

const Chat = () => {

    
    return (
        <div style={{display: 'flex'}}>
            <Sidebar />
            <ChatBar />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user
})

export default connect(mapStateToProps,null)(Chat)
