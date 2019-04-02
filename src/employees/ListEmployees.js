import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';

class ListEmployees extends Component {
  constructor(props){
    super(props);

    this.state  = {
      dataFromChild: null
    };
  }

  // tricky parameter
  handleClick(employee) {
    this.setState({
      dataFromChild: employee
    });
    this.props.history.push(`/employees/${employee.id}`);
  }

  render() {
    return (
      <div>
        {this.props.employees.map(employee =>(  
            <DisplayEmployee key={employee.id} employee={employee} onClick={this.handleClick.bind(this, employee)}/>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
