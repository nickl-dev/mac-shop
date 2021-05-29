import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './styles/global.scss'
import Landing from 'pages/Landing/Landing'
import Navbar from 'components/Navbar/Navbar.jsx'
// import { Counter } from './features/counter/Counter';

library.add(fab)



function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Landing}/>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
