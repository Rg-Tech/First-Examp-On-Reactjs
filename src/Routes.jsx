import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'
import Services from './component/Services'
import Contact from './component/Contact'
import Service from './service/Service'
import Login from './component/Login'

class Routes extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route  path="/services/:id" component={Service} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </>
        )
    }
}

export default Routes;