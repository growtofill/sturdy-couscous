import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './App.css';

import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import StateProvider from './components/StateProvider/StateProvider';
import Filters from "./components/Filters/Filters";
import CrewMemberList from "./components/CrewMemberList/CrewMemberList";

class App extends Component {
  render() {
    return (
      <StateProvider>
        <Filters />
        <div className="Row">
          <div className="Col"><CrewMemberList stage="applied" /></div>
          <div className="Col"><CrewMemberList stage="interviewing" /></div>
          <div className="Col"><CrewMemberList stage="hired" /></div>
        </div>
      </StateProvider>
    )
  }
}

export default App;
