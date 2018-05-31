import React, { Component } from 'react';
import '../App.css';
import NavMenu from '../components/NavMenu.js'


class Schedule extends Component {
    
    componentDidMount() {
        this.props.getSchedule();
    }  

    componentDidUpdate(prevProps) {
        if (this.props.match.path !== prevProps.match.path) {
          this.props.getSchedule()
        }
      }
    
    
    
    render() {
    console.log(this.props.match)
    console.log(this.props.schedule)
        return (
            <div>
                <NavMenu />
                <div className="container center-align" style={{color: 'black', marginTop: '100px'}}>
                    <div className="row">
                        <div className="col s1">   
                        </div>
                        <div className="col s2">
                            <h3>Monday</h3>
                        </div>
                        <div className="col s2">
                            <h3>Tuesday</h3>
                        </div>
                        <div className="col s2">
                            <h3>Wednesday</h3>
                        </div>
                        <div className="col s2">
                            <h3>Thursday</h3>
                        </div>
                        <div className="col s2">
                            <h3>Friday</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2">
                        </div>
                        <div className="col s2">
                            
                        </div>
                       
                </div>
                
            </div>
        </div>
        );
    }
}

export default Schedule;