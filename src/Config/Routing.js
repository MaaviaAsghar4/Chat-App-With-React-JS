import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Container/Home'
import Chat from '../Container/Chat'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home } />
                <Route path='/chat' component={Chat }  />
            </Switch>
        </div>
    )
}


export default Routing
