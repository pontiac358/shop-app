import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import App from '../containers/App'
import Cart from '../containers/Cart'
import Home from '../containers/Home'
import Products from '../containers/Products'

export const history = createBrowserHistory();

const Routes = () => {

  return (
          <Router history={ history }>
            <Switch>
                <App>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/cart" component={ Cart } />
                    <Route path="/menu/:id/:url_title" component={ Products } />
                </App>
            </Switch>
          </Router>
  )
};

export default Routes
