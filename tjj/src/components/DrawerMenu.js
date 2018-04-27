import React, { Component }  from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ListMenu from './ListMenu.js'

class DrawerMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton
                    label="Toggle Drawer"
                    onClick={this.handleToggle}><Menu color={'white'} /></IconButton>
                <Drawer
                    style={{opacity: '0.95'}}
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}>
                    <ListMenu handleClose={this.handleClose} />

                </Drawer>
            </div>
        );
    }
}

export default DrawerMenu;