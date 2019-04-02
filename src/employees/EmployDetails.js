import React, { Component } from 'react';
import * as employeeService from './service/employee-service';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: employeeService.getEmployee(this.props.match.params.id)
        }
    }
    render() {
      return (
        <p>
        {this.state.employee.name}
      </p>
      
      )
    }
}

export default EmployeeDetails;