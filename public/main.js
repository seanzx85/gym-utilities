import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { WeightConversion } from  './components/weight-conversion.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

const App = () => (
    <MuiThemeProvider>
        <WeightConversion/>
    </MuiThemeProvider>
);

ReactDOM.render(<App/>,document.getElementById('content'));

