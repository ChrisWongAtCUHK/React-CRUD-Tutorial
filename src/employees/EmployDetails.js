import React, { Component } from 'react';
import Moment from 'moment';
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
        <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h3 className="panel-title">{this.state.employee.name}</h3>
                    </div>
                    <div className="panel-body">
                    <div className="col-xs-10">
                
                        <div className="row vertical-align">
                
                        <div className="col-xs-4">
                            <img className="imageClass" src={employeeService.getImages()[this.state.employee.photoPath]} alt=""/>
                        </div>
                        <div className="col-xs-8">
                
                            <div className="row">
                            <div className="col-xs-6">
                                Gender
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.gender}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Date of Birth
                            </div>
                            <div className="col-xs-6">
                                : {Moment(this.state.employee.dateOfBirth).format('ll')}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Contact Preference
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.contactPreference}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Phone
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.phoneNumber}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Email
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.email}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Department
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.department}
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xs-6">
                                Is Active
                            </div>
                            <div className="col-xs-6">
                                : {this.state.employee.isActive}
                            </div>
                            </div>
                
                        </div>
                
                    </div>
                </div>
            </div>
        </div> 
      )
    }
}

export default EmployeeDetails;