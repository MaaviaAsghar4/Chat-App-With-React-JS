import React from 'react'
import './Login.css'
import { connect } from 'react-redux'
import { auth_data } from '../../Store/action'

const Login = (props) => {
    let login = () => {
        props.auth_data()
    }
    return (
        <div className='login-box'>
            <h2 className='login-head'>Please Login to Continue</h2>
            <button className='login-btn' onClick={login}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    auth_data: () => dispatch(auth_data())
})


export default connect(null, mapDispatchToProps)(Login)