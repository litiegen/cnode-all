import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch,} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/getstart" component={App}/>
      <Route path="/api" component={App}/>
      <Route path="/about" component={App}/>
      <Route path="/tag" component={App} />
      <Route path="/topic" component={App}/>
    </Switch>
  </Router>
), document.getElementById('root'));
