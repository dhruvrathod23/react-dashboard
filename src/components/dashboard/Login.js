import React, { Component } from "react";
import { Route, Link, Router, Switch } from "react-router-dom";
import Main from './Main';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


class Login extends Component {
    render() {
        return (
            <div>

                <div className="maincontainer">
                    <div class="container-fluid">
                        <div class="row no-gutter">

                            <div className="col-md-6 d-none d-md-flex bg-light"></div>

                            <div class="col-md-6 bg-image">
                                <div class="login d-flex align-items-center py-5">

                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                <h3 class="display-4 text-center">Masterkoder</h3>
                                                <p class="text-muted mb-4 text-center">Learning Simplified</p>
                                                <form>
                                                    <div class="form-group mb-3">
                                                        <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                    </div>
                                                    <div class="form-group mb-3">
                                                        <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                    </div>
                                                    {/*<div class="custom-control custom-checkbox mb-3">
                                                        <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                        <label for="customCheck1" class="custom-control-label">Remember password</label>
                                                    </div>*/}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default Login

//https://69b8e31e447599cd29aec01f3b4aa8e6.m.pipedream.net