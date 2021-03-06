// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Lent, Login } from 'pages';

class App extends Component {

  render() {
      return (
          <div>
            <Switch>
              <Route exact path="/" component={Lent}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </div>
      );
  }
}

export default App;