import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom'

class ProgramMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    const buttonStyle = {
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: '5px'
      };

    return (
      <span>
        <FlatButton 
            onClick={this.handleClick}
            label="Programs"
            style={buttonStyle}
        />

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Overview" onClick={() => {this.props.history.push('/overview'); this.handleRequestClose();}} />
            <MenuItem primaryText="Tiny Tigers" onClick={() => {this.props.history.push('/tinyTigers'); this.handleRequestClose();}} />
            <MenuItem primaryText="Junior Grapplers" onClick={() => {this.props.history.push('/juniorGrapplers'); this.handleRequestClose();}} />
            <MenuItem primaryText="Teens" onClick={() => {this.props.history.push('/teens'); this.handleRequestClose();} } />
            <MenuItem primaryText="Adults" onClick={() => {this.props.history.push('/adults'); this.handleRequestClose();}} />
          </Menu>
        </Popover>
      </span>
    );
  }
}

export default withRouter(ProgramMenu);