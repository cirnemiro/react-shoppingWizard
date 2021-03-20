import React , { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Shopping from './shopping.components.js'

export default class LandingPage extends Component {
    render(){
        return(
           <Router>
                <div className="landingPage">
                    <h1 className="landingPage__title">Welcome to new balance shop</h1>
                </div>
                <button><Link to="/shopping">GO TO SHOPPING</Link></button>
                <Route path="/shopping" exact component={Shopping} />
           </Router>
        )
    }
}