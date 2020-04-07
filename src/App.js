import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withRouter } from 'react-router';

import logo from "./logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/yeti/bootstrap.min.css";
import "./App.css";

import Constants from "./common/constants";

import Form from "./components/form/form";
import Dashboard from "./components/dashboard/dashboard";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[]
        }

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onSelectChange(e) {
        e.preventDefault();
    }

    onClick(e) {
        e.preventDefault();
        
        Constants.data = [];
    }


  render() {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Imob</a>
                <button  onClick={this.onClick} className="btn btn-primary">Reset Data</button>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">XPTO Admin</a>
                        </li>
                    </ul>
            </nav>
      <Router>
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/form" className="nav-link">Form</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/form" exact component={Form} />
                </main>
            </div>
        </div>
    </Router>
</div>
    );
  }
}

export default App;

// https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
