import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Userimage from '../../images/images.png'
import { connect } from 'react-redux'
import { get_firebaseUsers, get_chatuser } from '../../Store/action'

const Sidebar = (props) => {

    let [toggle, setToggle] = useState(true)
    // let [firebaseData, setFirebaseData] = []
    let user = props.user
    let fbaseuser = props.database
    let classToggle = () => {
        setToggle(!toggle)
    }
    useEffect(() => {
        props.get_firebaseUsers()
    }, [])


    return (
        <div className={toggle ? 'sidebar-container' : 'sidebar-container active'}>
            <div className='toggler' onClick={classToggle}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className={toggle ? 'user-profile' : 'user-profile active'}>
                <img className='user-img' src={user.displayName? user.photoURL :Userimage} alt='' />
                <h3 className='user-name'>{user.displayName? user.displayName :'Name'}</h3>
            </div>
            <div className={toggle ? 'firebase-user' : 'firebase-user active'}>
                <h2 className='current-user'>Current Users</h2>
                <div className='user-container'>
                    {fbaseuser.map((v, i) => {
                        return ( user.uid !== v.userUid &&
                            <li key={i} className='user-list' onClick={()=>{props.get_chatuser(v)}}>
                                <img src={v.userPhoto} className='firebaseuser-img' alt='' />
                                <span>{v.userName}</span>
                            </li>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    database: state.database.firebaseUser,
})

const mapDispatchToProps = (dispatch) => ({
    get_firebaseUsers: () => dispatch(get_firebaseUsers()),
    get_chatuser: (user) => dispatch(get_chatuser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
