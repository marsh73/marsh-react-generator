import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import HomeContainer from './ui/home/homeContainer'
import App from './App';

const routes = (
  <Route path="/" component={App}>
    <Route path="home" component={HomeContainer} />
  </Route>
)

export default routes
