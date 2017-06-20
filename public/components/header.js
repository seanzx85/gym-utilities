import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleToggle = () =>{
    console.log('Toggle Open');
  }


  render() {
    return (
       <div className='header'>
         Gym Utilities
         </div>
    );
  }
}