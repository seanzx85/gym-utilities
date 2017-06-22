import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';


export default class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer docked={true} open={this.props.openSideMenu} className='side-menu'>
        <div className='close-container'>
          <IconButton touch={true} onTouchTap={this.props.toggleSideMenu}>
            <ContentClear />
          </IconButton>
        </div>
        <NavLink to='/tabata'><MenuItem onTouchTap={this.props.toggleSideMenu} primaryText='Tabata Timer'/></NavLink>
        <NavLink to='/weights'><MenuItem onTouchTap={this.props.toggleSideMenu} primaryText='Weight Tables'/></NavLink>

      </Drawer>
    );
  }
}

Menu.propTypes = {
  openSideMenu: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired
}


//Tabata Timer
//Weight Percentages, raw and nearest 5 pounds
//What should be on the bar
//Lbs to Kilo