import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Menu:
        <ul>
          <li><NavLink to='/tabata'>Tabata Timer</NavLink></li>
        </ul>
      </div>
    );
  }
}




//Tabata Timer
//Weight Percentages, raw and nearest 5 pounds
//What should be on the bar
//Lbs to Kilo