// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Lent } from 'pages';

class App extends Component {
  render() {
      return (
          <div>
            <Switch>
            <Route exact path="/" component={Lent}/>
            </Switch>
          </div>
      );
  }
}

export default App;