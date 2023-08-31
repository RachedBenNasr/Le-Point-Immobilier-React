import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ComingSoon from './views/coming-soon'
import Home from './views/home'
import Promote from './views/promote'
import Buying from './views/buying'
import Publish from './views/publish'
import Contact from './views/contact'
import Services from './views/services'
import Renting from './views/renting'
import Commercial from './views/commercial'
import Opportunities from './views/opportunities'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ComingSoon} exact path="/soon" />
        <Route component={Home} exact path="/" />
        <Route component={Promote} exact path="/promote" />
        <Route component={Buying} exact path="/buying" />
        <Route component={Publish} exact path="/publish" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Services} exact path="/services" />
        <Route component={Renting} exact path="/renting" />
        <Route component={Commercial} exact path="/commercial" />
        <Route component={Opportunities} exact path="/opportunities" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
