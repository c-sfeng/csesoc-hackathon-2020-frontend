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
import Support from './Support.jsx';
import LettersCreate from './LettersCreate.jsx';
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
    socket.emit("getUserId");
    socket.on("receiveUserId", (userId) => {
      this.userId = userId;
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={content.urls.homeURL}>
              <Home />
            </Route>
            <Route exact path={content.urls.lettersURL} render={(props) => (
              <Letters {...props} userId={this.userId} />
            )}>
            </Route>
            <Route exact path={content.urls.responsesURL} render={(props) => (
              <Responses {...props} userId={this.userId} />
            )}>
            </Route>
            <Route exact path={content.urls.requestsURL} render={(props) => (
              <Requests {...props} userId={this.userId} />
            )}>
            </Route>
            <Route exact path={content.urls.threadURL} component={Thread}>
            </Route>
            <Route exact path={content.urls.supportURL} render={(props) => (
              <Support {...props} userId={this.userId} />
            )}>
            </Route>
            <Route exact path={content.urls.lettersCreateURL} render={(props) => (
              <LettersCreate {...props} userId={this.userId} />
            )}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App, socket };
