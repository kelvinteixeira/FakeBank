import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/Login/index'
import Dashboard from './components/Dashboard/index'
import Error from './components/Error/index'
import SingUp from './components/Singup'
import Recovery from './components/Recuperação'


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/singup" exact component={SingUp}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/recovey" exact component={Recovery}></Route>
      <Route path="*" component={Error}></Route>
    </Switch>
  </BrowserRouter>
  )
}