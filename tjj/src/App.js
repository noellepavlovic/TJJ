import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'
import Page from './components/Page.js'
import Contact from './components/Contact.js'
import Schedule from './components/Schedule.js'
import Gallery from './components/Gallery.js'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          content: "",
          schedule: []
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

      getSchedule = () => {
        axios.get(`http://localhost:3000/schedule/`)
        .then((response) => {
            console.log(response)
            let __schedule = response.data;
            console.log("here")
            this.setState({
                schedule: __schedule
            })  
            console.log(this.state.schedule)
            this.props.history.push(`/schedule`);
           

        })
      }
    render() {
        return (
            <div>
                <NavMenu getPage={(source) => this.getPage(source)} getSchedule={() => this.getSchedule()} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/schedule' render={(props) => <Schedule content={this.state.content} getSchedule={(day, program) => this.getSchedule(day, program) }{...props} /> } /> 
                        <Route path='/:page' render={(props) => <Page content={this.state.content} getPage={(source) => this.getPage(source)}{...props}/> } />
                           
                    </Switch>        
            </div>
        );
    }
}

export default withRouter(App);
