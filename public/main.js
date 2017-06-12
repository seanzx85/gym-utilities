import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {WeightConversion} from  './components/weight-conversion';
import {Landing} from  './components/landing';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="Gym Utilities"/>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('application'));


//Tabata Timer
//Weight Percentages, raw and nearest 5 pounds
//What should be on the bar
//Lbs to Kilo
