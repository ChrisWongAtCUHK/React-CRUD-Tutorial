import React, { Component } from 'react';

class EmployeeDetails extends Component {
    render() {
      return (
        <p>
        employee-details works!
        { this.props.match.params.id}
      </p>
      
      )
    }
}

export default EmployeeDetails;