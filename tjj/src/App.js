import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'

class App extends Component {
    render() {
        return (
            <div>
                <NavMenu />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                
            </div>
        );
    }
}

export default App;
