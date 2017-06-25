import React from 'react';
import { Header, Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Chat from './Chat';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'editorials'
    };
  }
  handleItemClick(e, { name }) {
    // this.state.activeItem = name;
    this.setState({
      activeItem: name
    });
  }
  render() {
    return (
      <div>
        <Header as="h1">
          <Menu>
            <Menu.Item
              name='editorials'
              active={this.state.activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
              채팅
            </Menu.Item>

            <Menu.Item
              name='reviews'
              active={this.state.activeItem === 'reviews'}
              onClick={this.handleItemClick}
            >
              기타
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
              active={this.state.activeItem === 'upcomingEvents'}
              onClick={this.handleItemClick}
            >
              등등
            </Menu.Item>
          </Menu>
        </Header>
        <Container text style={{ display: this.state.activeItem === 'editorials' ? 'block' : 'none' }}>
          <Chat />
        </Container>
        <Container text style={{ display: this.state.activeItem === 'reviews' ? 'block' : 'none' }}>
          <Header as='h2'>reviews</Header>
          <p>Lorem reviews do</p>
          <p>Lorem reviews do</p>
        </Container>
        <Container text style={{ display: this.state.activeItem === 'upcomingEvents' ? 'block' : 'none' }}>
          <Header as='h2'>upcomingEvents</Header>
          <p>Lorem ipsum do upcomingEvents</p>
          <p>Lorem ipsum do upcomingEvents</p>
        </Container>
      </div>
    );
  }
}
