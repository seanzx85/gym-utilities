import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Menu from './components/menu';
import Header from './components/header';
import Landing from './components/landing';
import Tabata from './components/tabata';
import Weights from './components/weights';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openSideMenu: false };
    }

  toggleSideMenu = () =>{
    this.setState({openSideMenu: !this.state.openSideMenu});
  }

    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Router>
                <div>
                    <Header toggleSideMenu={this.toggleSideMenu.bind(this)}/>
                    <Menu openSideMenu={this.state.openSideMenu} toggleSideMenu={this.toggleSideMenu.bind(this)}/>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/tabata" component={Tabata} />
                        <Route path='/weights' component={Weights}/>
                        <Route render={() => {
                            return (<div>Not Found</div>);
                        }} />
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider >)
    };
};
ReactDOM.render(<App />, document.getElementById('application'));


//Tabata Timer
//Weight Percentages, raw and nearest 5 pounds
//What should be on the bar
//Lbs to Kilo
