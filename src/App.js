import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';
import ListEmployees from './employees/ListEmployees';
import CreateEmployee from './employees/CreateEmployee';
import EmployeeDetails from './employees/EmployDetails';
import * as employeeService from './employees/service/employee-service';

const employees = employeeService.getEmployees();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={(props) => <ListEmployees {...props} employees={employees} />} />
            <Route exact path="/create" component={CreateEmployee} />
            <Route exact path="/list" component={(props) => <ListEmployees {...props} employees={employees} />} />
            <Route exact path="/employees/:id" component={EmployeeDetails}/>
            <Route component={(props) => <ListEmployees {...props} employees={employees} />} />
          </Switch>  
        </div>
      </Router>
    );
  }
}

export default App;
