import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'editorials'
    };
  }
  handleItemClick(e, { name }) {
    console.log(name, this);
    // this.state.activeItem = name;
    this.setState({
      activeItem: name
    });
  }
  render() {
    console.log('render!!!');
    return (
      <div>
        <Header as="h1">
          <Menu>
            <Menu.Item
              name='editorials'
              active={this.state.activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
              Editorials
            </Menu.Item>

            <Menu.Item
              name='reviews'
              active={this.state.activeItem === 'reviews'}
              onClick={this.handleItemClick}
            >
              Reviews
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
              active={this.state.activeItem === 'upcomingEvents'}
              onClick={this.handleItemClick}
            >
              Upcoming Events
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}
