import React, { Component } from 'react';
import Moment from 'moment';
import './ListEmployees.css';

function importAll(r) {
  let images = {};
  for (var item of r.keys()) {
    images[item.replace('./', '')] = r(item); 
  }
  return images;
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

class ListEmployees extends Component {
  render() {
    return (
      <div>
        {this.props.employees.map(employee =>(
          <div className="panel panel-primary" key={employee.id}>
            <div className="panel-heading">
              <h3 className="panel-title">{employee.name}</h3>
            </div>
            <div className="panel-body">
              <div className="col-xs-10">
                <div className="row vertical-align">
                  <div className="col-xs-4">
                    <img className="imageClass" src={images[employee.photoPath]} alt=""/>
                  </div>

                  <div className="col-xs-8">
                    <div className="row">
                      <div className="col-xs-6">
                        Gender
                      </div>
                      <div className="col-xs-6">
                        : {employee.gender}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        Date of Birth
                      </div>
                      <div className="col-xs-6">
                        : {Moment(employee.dateOfBirth).format('ll')}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-6">
                        Contact Preference
                      </div>
                      <div className="col-xs-6">
                        : {employee.contactPreference}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Phone
                      </div>
                      <div className="col-xs-6">
                        : {employee.phoneNumber}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Email
                      </div>
                      <div className="col-xs-6">
                        : {employee.email}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Department
                      </div>
                      <div className="col-xs-6">
                        : {employee.department}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        Is Active
                      </div>
                      <div className="col-xs-6">
                        : {employee.isActive.toString()}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListEmployees;
