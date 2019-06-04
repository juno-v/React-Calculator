import React, { Component } from 'react';
import Calculator from "./Components/Calculator/Calculator"; 
import {connect} from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import ProtectedRoute from "./Components/ProtectedRoute/ProtectRoute"; 
import LoginPage from "./Components/LoginPage/LoginPage"; 

class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          
          <Calculator /> 

          <ProtectedRoute
            exact
            path="/login"
            component={LoginPage}
          />
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>

      </div>
    </Router>
    );
  }
}

export default connect()(App);