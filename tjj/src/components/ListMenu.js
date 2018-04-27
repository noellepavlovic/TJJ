import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import '../App.css';


class ListMenu extends Component {

    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };

  render() {
    return (
            <div>
                <List>
                    <ListItem
                        key={1}
                        primaryText="Programs"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem value="" primaryText="Tiny Tigers" />,
                            <ListItem value="" primaryText="Junior Grapplers" />,
                            <ListItem value="" primaryText="Teens" />,
                            <ListItem value="" primaryText="Adults" />,
                        ]}
                    />
                    <ListItem
                        key={2}
                        primaryText="Instructors"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem value="" primaryText="Eric Marentette" />,
                            <ListItem value="" primaryText="Mark Curran" />,
                            <ListItem value="" primaryText="TBA" />,
                            <ListItem value="" primaryText="TBA" />,
                        ]}
                    />
                </List>
            </div>
        );
    }
}

export default ListMenu;