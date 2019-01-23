import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';
import ListEmployees from './employees/ListEmployees';
import CreateEmployee from './employees/CreateEmployee';

const employees = [
  {
    id: 1,
    name: 'Mark',
    gender: 'Male',
    contactPreference: 'Email',
    email: 'mark@pragimtech.com',
    dateOfBirth: new Date('10/25/1988'),
    department: 'IT',
    isActive: true,
    photoPath: 'mark.png'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 2345978640,
    dateOfBirth: new Date('11/20/1979'),
    department: 'HR',
    isActive: true,
    photoPath: 'mary.png'
  },
  {
    id: 3,
    name: 'John',
    gender: 'Male',
    contactPreference: 'Phone',
    phoneNumber: 5432978640,
    dateOfBirth: new Date('3/25/1976'),
    department: 'IT',
    isActive: false,
    photoPath: 'john.png'
  }]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={(props) => <ListEmployees {...props} employees={employees} />} />
            <Route exact path="/create" component={CreateEmployee} />
            <Route exact path="/list" component={(props) => <ListEmployees {...props} employees={employees} />} />
            <Route component={(props) => <ListEmployees {...props} employees={employees} />} />
          </Switch>  
        </div>
      </Router>
    );
  }
}

export default App;
