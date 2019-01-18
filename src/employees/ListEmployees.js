import React, { Component } from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));


class ListEmployees extends Component {
  render() {
    return (
      <div className="panel panel-primary"  >
        {this.props.employees.map(employee =>(
          <div key={employee.id}>
            <div className="panel-heading">
              <h3 className="panel-title">{employee.name}</h3>
            </div>
            <div className="panel-body">
              <div className="col-xs-10">
                <div className="row vertical-align">
                  <div className="col-xs-4">
                    <img className="imageClass" src={images[employee.photoPath]} />
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
