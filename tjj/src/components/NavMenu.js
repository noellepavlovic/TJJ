import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from './DrawerMenu.js';
import FlatButton from 'material-ui/FlatButton';
import ProgramMenu from './ProgramMenu.js'
import { withRouter } from 'react-router-dom'

class NavMenu extends Component {
    
    render() {
        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white',
            marginTop: '5px'
          };


        const rightButtons = (
            <div>
              <FlatButton label="Home" style={buttonStyle} onClick={()=> {this.props.history.push('/')}} />
              <ProgramMenu style={buttonStyle} />
              <FlatButton label="Schedule" style={buttonStyle} onClick={() => this.props.history.push('/schedule')} />
              <FlatButton label="Gallery" style={buttonStyle} onClick={() => this.props.history.push('/gallery')}/>
              <FlatButton label="Contact" style={buttonStyle} onClick={() => this.props.history.push('/contact')}/>
            </div>
          );

        return (
            <div>
                <AppBar
                    style={{ position: 'fixed', top: 0 , backgroundColor: "#717377", opacity: "0.91"}}
                    title="Tecumseh Jiu Jitsu"
                    iconElementLeft={<DrawerMenu />}
                    iconElementRight={rightButtons}
                /> 
                
            </div>
        );
    }
}

export default withRouter(NavMenu);