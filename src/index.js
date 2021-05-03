



















import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import './assets/css/Tog.css'
import "./assets/css/bootstrap.min.css";
import './assets/css/light-bootstrap-dashboard.css';
//import "./assets/css/dashboard.css";
//import "../node_modules/font-awesome/css/font-awesome.min.css";


//import Data2 from './components/Dashboard/Data2'
//import * as serviceWorker from "./serviceWorker";
//import Cards from './components/Dashboard/Cards'
//import Crud from './components/Dashboard/Crud'
//import Salesc from './components/Dashboard/Salesc'
//import Userc from './components/Dashboard/Userc'
///import Login from './components/Dashboard/Login'
//import Form from './components/Dashboard/Form'
//import Apilog from './Apilog'
//import Submitform from './Submitform'
//import Sidebar from './components/Teacher/Sidebar'
//import Main from './components/Teacher/Main'
//import Edit from './components/Dashboard/Edit'
ReactDOM.render(
    <Router>
        <div className="App">
            <App />
        </div>
    </Router>,
    document.getElementById("root")
);

//serviceWorker.unregister();


{/*import ReactDOM from "react-dom";

import './assets/css/style.css';
import SideBar from "./components/common/Sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
       
        <h2> sidebar!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/}
