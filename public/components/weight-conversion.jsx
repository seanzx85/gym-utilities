import React from 'react';

export default class App extends React.Component {
    render() {
        console.log('Loaded!');
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>);
    }
}