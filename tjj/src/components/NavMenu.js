import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from './DrawerMenu.js';
import FlatButton from 'material-ui/FlatButton';

class NavMenu extends Component {
    
    render() {
        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white',
            marginTop: '5px'
          };

        const rightButtons = (
            <div>
              <FlatButton label="Home" style={buttonStyle} />
              <FlatButton label="Programs" style={buttonStyle} />
              <FlatButton label="Schedule" style={buttonStyle} />
              <FlatButton label="Gallery" style={buttonStyle} />
              <FlatButton label="Contact" style={buttonStyle} />
            </div>
          );

        return (
            <div>
                <AppBar
                    style={{ position: 'fixed', top: 0 , backgroundColor: "#b3b3b5", opacity: "0.90"}}
                    title="Tecumseh Jiu Jitsu"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementLeft={<DrawerMenu />}
                    iconElementRight={rightButtons}
                /> 
            </div>
        );
    }
}

export default NavMenu;