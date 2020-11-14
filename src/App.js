import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NavigationBar from './Navigation';
import MainPage from './MainPage';
import LibraryPage from './LibraryPage';
import Booking from './Booking';
import Seats from './Seats';
import SettingPage from './SettingPage';
import BrowsePage from './BrowsePage';
import SupportPage from './SupportPage'
import HistoryPage from './HistoryPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    
    return (
      <div >
        <React.Fragment>
          <Router>
            <NavigationBar />
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/LibraryPage" component={LibraryPage} exact />
                <Route path="/Seats" component={Seats} />
                <Route path="/Booking" component={Booking} />
                <Route path="/BrowsePage" component={BrowsePage} />
                <Route path="/SettingPage" component={SettingPage} />
                <Route path="/SupportPage" component={SupportPage} />
                <Route path="/HistoryPage" component={HistoryPage} />
          </Switch>
          </Router>
        </React.Fragment>
      </div>
      
    );
  }
}

export default App;
