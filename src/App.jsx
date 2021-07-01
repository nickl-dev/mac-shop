import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'

// Stylesheets
import './styles/global.scss'

// Pages
import Home from 'pages/Home/Home'
import Buy from 'pages/Buy/Buy'
import Bag from 'pages/Bag/Bag'

//Components
import Navbar from 'components/Navbar/Navbar.jsx'

library.add(fab, faShoppingBag)

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/bag" exact component={Bag} />
        </Switch>

      </div>
    </Router>
  )
}

export default App;
