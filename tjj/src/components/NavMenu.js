import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from './DrawerMenu.js'

class NavMenu extends Component {
    render() {
        return (
            <div>
                <AppBar
                    style={{ position: 'fixed', top: 0 , backgroundColor: "#b3b3b5", opacity: "0.90"}}
                    title="Tecumseh Jiu Jitsu"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementLeft={<DrawerMenu />}
                /> 
            </div>
        );
    }
}

export default NavMenu;