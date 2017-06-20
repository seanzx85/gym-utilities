import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Menu from './components/menu';
import Header from './components/header';
import Landing from './components/landing';
import Tabata from './components/tabata';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
    <Router>
        <div>
            <Menu />
            <Header />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/tabata" component={Tabata} />
                <Route render={() => {
                    return (<div>Not Found</div>);
                }} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('application'));


//Tabata Timer
//Weight Percentages, raw and nearest 5 pounds
//What should be on the bar
//Lbs to Kilo
