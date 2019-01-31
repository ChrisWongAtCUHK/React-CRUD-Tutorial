import React, { Component } from 'react';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employee: 
            { 
                fullName: '',
                email: ''
            } 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle the input change
    handleChange(event) {
        let employee = this.state.employee;
        employee[event.target.id] = event.target.value;
        this.setState({employee: employee});
    }
    
    // handle form submit
    handleSubmit(event) {
        alert(JSON.stringify(this.state.employee));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Create Employee</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor ="fullName">Full Name</label>
                                <input id="fullName" type="text" className="form-control" name="fullName"
                                    value={this.state.employee.fullName} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" className="form-control" name="email" 
                                    value={this.state.employee.email} onChange={this.handleChange}/>
                            </div>

                            <div className="panel-footer">
                                <button className="btn btn-primary" type="submit">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
                Generated Model :{JSON.stringify(this.state.employee)}
            </div>
        )
    }
}

export default CreateEmployee;