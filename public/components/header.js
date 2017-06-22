import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <AppBar title='Gym Utilities' onLeftIconButtonTouchTap={this.props.toggleSideMenu}/>         
    );
  }
}

 Header.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired
}