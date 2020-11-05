import React from 'react'
import Header from '../Components/HomeComponents/Header'
import Login from '../Components/HomeComponents/Login'

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', height: "100vh"}}>
           <Header />
           <Login />
        </div>
    )
}

export default Home
