import React from 'react'
import './Login.css'
import { connect } from 'react-redux'
import { auth_data } from '../../Store/action'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    let history = useHistory()
    let login = () => {
        props.auth_data(history)
    }
    return (
        <div className='login-box'>
            <h2 className='login-head'>Please Login to Continue</h2>
            <button className='login-btn' onClick={login}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    auth_data: (history) => dispatch(auth_data(history))
})


export default connect(null, mapDispatchToProps)(Login)