import React, { Component } from 'react';
import Moment from 'moment';
import './DisplayEmployees.css';
import * as employeeService from './service/employee-service';


class DisplayEmployee extends Component {
    handleSelectedEmployee() {
        let className = "panel panel-primary pointerCursor";
        if(this.props.selectedEmployeeId === this.props.employee.id.toString()) {
            return className + " panel-success";
        }
        return className;
    }
    render() {
      return (
          <div className={this.handleSelectedEmployee()} onClick={this.props.onClick}>
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.employee.name}</h3>
            </div>
            <div className="panel-body">
              <div className="col-xs-10">
                <div className="row vertical-align">
                  <div className="col-xs-4">
                    <img className="imageClass" src={employeeService.getImages()[this.props.employee.photoPath]} alt=""/>
                  </div>

                  <div className="col-xs-8">
                    <div className="row">
                      <div className="col-xs-6">
                        Gender
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.gender}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        Date of Birth
                      </div>
                      <div className="col-xs-6">
                        : {Moment(this.props.employee.dateOfBirth).format('ll')}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        Contact Preference
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.contactPreference}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Phone
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.phoneNumber}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Email
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.email}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Department
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.department}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Is Active
                      </div>
                      <div className="col-xs-6">
                        : {this.props.employee.isActive.toString()}
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

export default DisplayEmployee;
