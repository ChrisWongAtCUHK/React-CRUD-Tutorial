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
  }

  render() {
    return (
      <div>
        { 
          this.state.dataFromChild ? 
            <h1>
              {this.state.dataFromChild.name + ' ' + this.state.dataFromChild.gender}
            </h1>
            : null 
          }
      
        {this.props.employees.map(employee =>(  
            <DisplayEmployee key={employee.id} employee={employee} onClick={this.handleClick.bind(this, employee)}/>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
