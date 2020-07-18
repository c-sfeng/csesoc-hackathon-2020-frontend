import React from 'react';
import { 
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.scss';
import { content } from './assets/content';
import Home from './Home.jsx';
import Letters from './Letters.jsx';
import Responses from './Responses.jsx';
import Requests from './Requests.jsx';
import Thread from './Thread.jsx'
import socketIOClient from "socket.io-client";

var socket;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:8000/'
    };
    socket = socketIOClient(this.state.endpoint);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={content.urls.homeURL}>
              <Home />
            </Route>
            <Route exact path={content.urls.lettersURL}>
              <Letters />
            </Route>
            <Route exact path={content.urls.responsesURL}>
              <Responses />
            </Route>
            <Route exact path={content.urls.requestsURL}>
              <Requests />
            </Route>
            <Route exact path={content.urls.threadURL} component={Thread}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App, socket };
