import React, { Component } from "react";
import { Route, Link, Router, Switch } from "react-router-dom";
import Main from '../dashboard/Main';
import '../../assets/css/custom-login.css'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render() {
        return (
            <div>

                <div className="logincontainer">

                    <div className="boxcontainer">
                        <div className="topcontainer">
                            <div className="backdrop"></div>
                            <div className="headercontainer">
                                <div className="headertext">
                                    <h2>Welcome to Masterkoder</h2>
                                    <h5>Please login to continue</h5>
                                </div>
                            </div>
                        </div>
                        <form align="center">
                            <div class="form-group mb-3">
                                <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                            </div>
                            <div class="form-group mb-3">
                                <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                            </div>
                            <div class="form-group col-sm-5">
                                <Switch>
                                    <Route path="/Main" component={Main} />
                                    <Link to="/Main" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</Link>
                                </Switch>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        );
    }
}
export default Login
