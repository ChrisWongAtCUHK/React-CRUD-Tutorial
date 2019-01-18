import React, { Component } from 'react';

class ListEmployees extends Component {
  render() {
    return (
      <div className="panel panel-primary"  >
        {this.props.employees.map(employee =>(
          <div key={employee.id}>
            <div className="panel-heading">
              <h3 className="panel-title">{employee.name}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
