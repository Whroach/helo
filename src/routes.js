import React from 'react'
import {Switch, Route } from 'react-router-dom'
//Components we want to route to
import Authentication from './components/Auth/Authentication'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

export default (
    <Switch>
        <Route exact path={'/'} component={Authentication}/>
        <Route path={'/dashboard'} component={Dashboard}/>
        <Route path={'/post/:id'} component={Post}/>
        <Route path={'/new'} component={Form}/>
    </Switch>
)