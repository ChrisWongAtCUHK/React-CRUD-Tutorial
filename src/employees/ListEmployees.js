import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';

class ListEmployees extends Component {
  render() {
    return (
      <div>
        {this.props.employees.map(employee =>(  
          <div>
            <DisplayEmployee employee={employee}/>
          </div>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
