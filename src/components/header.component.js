import React , { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPage from './main/landingPage.component'
import Shopping from './main/shopping.components'

export default class Header extends Component{
    render(){
        return(
            <Router>
                <header>
                    <nav>
                        <img src="https://logos-marcas.com/wp-content/uploads/2020/09/New-Balance-Emblema.png"/>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shopping'>Shopping</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={LandingPage} />
                <Route path="/shopping" component={Shopping} />
            </Router>
        )
    }
}