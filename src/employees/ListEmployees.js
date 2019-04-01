import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';

class ListEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeToDisplayId: 0
    };
    this.nextEmployee = this.nextEmployee.bind(this);
  }

  nextEmployee(event) {
    if (this.state.employeeToDisplayId < this.props.employees.length - 1) {
      this.setState({employeeToDisplayId: this.state.employeeToDisplayId + 1});
    } else {
      this.setState({employeeToDisplayId: 0});
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.nextEmployee} class="btn btn-primary">
          View Next Employee
        </button>
        <br/><br/>
        <DisplayEmployee employee={this.props.employees[this.state.employeeToDisplayId]} />
      </div>
    );
  }
}

export default ListEmployees;
