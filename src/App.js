import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Sidebar from './components/Dashboard/Sidebar';
import Main from './components/dashboard/Main';
import Login from "./components/dashboard/Login";
import Sidebar from "./components/common/Sidebar";

//Datatable Modules
import "../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";

class App extends Component {
  render() {
    return (
      <div>
     

      <div className="wrapper">
       
        
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </div>
      </div>
    )
  }
}

/*import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Dashboard" component={Dashboard} />  
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}*/

export default App;
