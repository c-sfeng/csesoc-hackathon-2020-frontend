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

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
