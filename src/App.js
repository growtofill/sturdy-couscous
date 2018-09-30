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
  state = {}

  componentDidMount() {
    fetch('https://randomuser.me/api/?nat=gb&results=5')
      .then(response => response.json())
      .then(json => this.setState({ crewMembers: json.results }))
  }

  render() {
    return (
      <div className="App">
        <StateProvider>
          <Filters />
            {this.state.crewMembers
              ? (
                <div className="Row">
                  <div className="Col">
                    <CrewMemberList stage="applied" crewMembers={this.state.crewMembers} /></div>
                  <div className="Col">
                    <CrewMemberList stage="interviewing" crewMembers={this.state.crewMembers} /></div>
                  <div className="Col">
                    <CrewMemberList stage="hired" crewMembers={this.state.crewMembers} />
                  </div>
                </div>
              ) : "..."}
        </StateProvider>
      </div>
    )
  }
}

export default App;
