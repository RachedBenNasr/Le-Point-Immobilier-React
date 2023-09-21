import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ComingSoon from './views/coming-soon'
import Home from './views/home'
import NotFound from './views/not-found'
import Promote from './views/promote'
import Buying from './views/buying'
import Publish from './views/publish'
import Contact from './views/contact'
import Consulting from './views/consulting'
import Services from './views/services'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ComingSoon} exact path="/soon" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Route component={Promote} exact path="/promote" />
        <Route component={Buying} exact path="/buying" />
        <Route component={Publish} exact path="/publish" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Consulting} exact path="/consulting" />
        <Route component={Services} exact path="/service" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
