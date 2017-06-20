import React from 'react';
import {Link} from 'react-router-dom'

export default class Landing extends React.Component {
    render() {
        console.log('Render Landing');
        return (
            <div>
                <h1>Welcome</h1>
                <div>What do you want to do?</div>

                <ul>
                <li><Link to="/tabata">Tabata</Link></li>
                </ul>
            </div>
        );
    }
}