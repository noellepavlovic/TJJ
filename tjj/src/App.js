import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'
import Page from './components/Page.js'
import Contact from './components/Contact.js'

import Gallery from './components/Gallery.js'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          content: "",
        };
      }

    getPage = (source) => {
        axios.get(`http://localhost:3000/content/?title=${source}`)
        .then((response) => {
            let __content = response.data[0].pageContent;
            console.log("here")
            this.setState({
                content: __content
            })
            console.log(this.state.content)
            this.props.history.push(`/${source}`);

        })
      }

    render() {
        return (
            <div>
                <NavMenu getPage={(source) => this.getPage(source)} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/:page' render={(props) => <Page content={this.state.content} getPage={(source) => this.getPage(source)}{...props}/> } />
                    </Switch>

                    
                
            </div>
        );
    }
}

export default withRouter(App);
