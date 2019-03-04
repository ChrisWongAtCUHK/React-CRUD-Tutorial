import React, { Component } from 'react';

class CreateEmployee extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Create Employee</h3>
                </div>
                <div className="panel-body" />
                <div className="panel-footer">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
                </div>
            </form>
            </div>
        )
    }
}

export default CreateEmployee;