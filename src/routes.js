import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/Home/index'
import Dashboard from './components/Dashboard/index'
import Error from './components/Error/index'
import SingUp from './components/Singup'


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/singup" exact component={SingUp}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="*" component={Error}></Route>
    </Switch>
  </BrowserRouter>
  )
}