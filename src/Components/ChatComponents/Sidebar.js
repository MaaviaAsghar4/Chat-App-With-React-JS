import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Userimage from '../../images/images.png'
import { connect } from 'react-redux'
import { get_firebaseUsers } from '../../Store/action'

const Sidebar = (props) => {

    let [toggle, setToggle] = useState(true)
    // let [firebaseData, setFirebaseData] = []
    let classToggle = () => {
        setToggle(!toggle)
    }
    // console.log(props.database, props.user)

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
                <img className='user-img' src={Userimage} alt='' />
                <h3>Name</h3>
            </div>
            <div className={toggle ? 'firebase-user' : 'firebase-user active'}>
                <h2 className='current-user'>Current Users</h2>
                <div className='user-container'>
                    <li className='user-list'>
                        <img src={Userimage} className='firebaseuser-img' alt='' />
                        <span>Name</span>
                    </li>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    database: state.database.firebaseUser
})

const mapDispatchToProps = (dispatch) => ({
    get_firebaseUsers: () => dispatch(get_firebaseUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
