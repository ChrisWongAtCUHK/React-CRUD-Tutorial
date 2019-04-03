import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';

const searchStyle = {
  width: "300px"
}

class ListEmployees extends Component {
  constructor(props){
    super(props);

    this.state  = {
      employees: this.props.employees,
      dataFromChild: null
    };
  }

  // filter by the search term
  handleSearch(event){
    let employees = this.props.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
    this.setState({employees: employees});
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
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Search By Name"
                    style={searchStyle} onChange={this.handleSearch.bind(this)}/>
        </div>
        {this.state.employees.map(employee =>(  
            <DisplayEmployee key={employee.id} employee={employee} onClick={this.handleClick.bind(this, employee)} selectedEmployeeId={this.props.match.params.id} />
        ))}
      </div>
    );
  }
}

export default ListEmployees;
