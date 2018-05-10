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
        return (
            <div>
                <NavMenu />
                <div className="container" style={{color: 'black', marginTop: '100px'}}>
                    <div className="row">
                    <div className="col s2">
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
                            {this.props.schedule}
                        </div>
                        {/* <div className="col s2">
                            {this.props.getSchedule("tuesday","tinyTigers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("wednesday","tinyTigers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("thursday","tinyTigers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("Friday","tinyTigers")}
                            {this.props.content}
                        </div>

                    </div>
                    <div className="row">
                    <div className="col s2">
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("monday","juniorGrapplers")}
                            {this.props.content}

                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("tuesday","juniorGrapplers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("wednesday","juniorGrapplers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("thursday","juniorGrapplers")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("Friday","juniorGrapplers")}
                            {this.props.content}
                        </div>
                    </div>
                    <div className="row">
                    <div className="col s2">
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("monday","adults")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("tuesday","adults")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("wednesday","adults")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("thursday","adults")}
                            {this.props.content}
                        </div>
                        <div className="col s2">
                            {this.props.getSchedule("Friday","adults")}
                            {this.props.content}
                        </div> */}
                </div>
                
            </div>
        </div>
        );
    }
}

export default Schedule;