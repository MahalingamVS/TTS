import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GenericReport from './Reports/GenericReport';
import App from './App';
import './index.css';

function Root1() {
// const check="KAP";
// const check1="DLM";
  return (
    <div>
      <Router>
        <Switch>
          <Route render={()=><GenericReport data={"KAP"}/>} path="/KAPReport"  /> 
          <Route render={()=><GenericReport data={"DLM"}/>} path="/DLMReport" />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  )
}
ReactDOM.render(<Root1 />, document.getElementById('root'));

serviceWorker.unregister();
