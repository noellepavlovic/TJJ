import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/NavMenu.js'

class App extends Component {
    render() {
        return (
            <div>
                <NavMenu />

                <div className="row" style={{ marginTop: "65px", backgroundImage: "url(./images/placeholder.png)" }}>
                    <div className="col s3">
                    </div>
                    <div className="col s6 center-align" style={{ marginTop: "15px" }}>
                        <img src="./images/tjj_logo.png" alt="Tecumseh Jiu Jitsu" />
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                    </div>
                </div>
                <div className="col s3">
                </div>
                <div className="row" style={{ backgroundColor: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                <div className="row" style={{ backgroundColor: "#b3b3b5" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
        );
    }
}

export default App;
