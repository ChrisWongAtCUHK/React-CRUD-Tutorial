import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';

function importAll(r) {
    let images = {};
    for (var item of r.keys()) {
      images[item.replace('./', '')] = r(item); 
    }
    return images;
  }
  
const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            employee: { 
                fullName: '',
                email: '',
                phoneNumber:'',
                contactPreference: '',
                gender: '',
                dateOfBirth: new Date(),
                photoPath: ''
            },
            previewPhoto: false,
            fullNameControl: {
                hasError: false,
                hasSuccess: false,
            },

        };

        this.handleFullNameChange  = this.handleFullNameChange.bind(this);
        this.handleChange          = this.handleChange.bind(this);
        this.handleRadioChange     = this.handleRadioChange.bind(this);
        this.handleCheckboxChange  = this.handleCheckboxChange.bind(this);
        this.handleSelectChange    = this.handleSelectChange.bind(this);
        this.handleDateChange      = this.handleDateChange.bind(this);
        this.handlePhotoChange     = this.handlePhotoChange.bind(this);
        this.handlePhotoToggle     = this.handlePhotoToggle.bind(this);
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.handlefullNameControl = this.handlefullNameControl.bind(this);
    }

    // handle the full name change
    handleFullNameChange(event) {
        let employee = this.state.employee;
        employee[event.target.id] = event.target.value;
        this.setState({employee: employee});
        console.log(event.target.value);
        if(event.target.value === null || event.target.value.trim().length === 0){
            this.setState({fullNameControl: {
                hasError: true,
                hasSuccess: false
            }});
        } else {
            this.setState({fullNameControl: {
                hasError: false,
                hasSuccess: true
            }});
        }
    }

    // handle the input change
    handleChange(event) {
        let employee = this.state.employee;
        employee[event.target.id] = event.target.value;
        this.setState({employee: employee});
    }

    // handle the radio button change
    handleRadioChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.value;
        this.setState({employee: employee});
    }

    // handle the checkbox change
    handleCheckboxChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.checked;
        this.setState({employee: employee});
    }

    // handle the select change
    handleSelectChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.value;
        this.setState({employee: employee});
    }
    
    // handle the change of date of birth
    handleDateChange(date) {
        let employee = this.state.employee;
        employee.dateOfBirth = date;
        this.setState({employee: employee});
    }

    // handle the photo change
    handlePhotoChange(event) {
        let employee = this.state.employee;
        employee.photoPath = images[event.target.value];
        this.setState({employee: employee});
    }

    // handle the photo toogle
    handlePhotoToggle() {
        this.setState(prevState => ({
            previewPhoto: !prevState.previewPhoto
        }));
    }

    // handle required full name
    handlefullNameControl(event) {
        if(event.target.value === null || event.target.value.trim().length === 0){
            this.setState({fullNameControl: {
                hasError: true,
                hasSuccess: false
            }});
        } else {
            this.setState({fullNameControl: {
                hasError: false,
                hasSuccess: true
            }});
        }
    }

    // handle form submit
    handleSubmit(event) {
        console.log(JSON.stringify(this.state.employee));
        event.preventDefault();
    }

    render() {
        let departments = [
            { id: 1, name: 'Help Desk' },
            { id: 2, name: 'HR' },
            { id: 3, name: 'IT' },
            { id: 4, name: 'Payroll' }
        ];
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Create Employee</h3>
                        </div>
                        <div className="panel-body">
                            <div className={"form-group " 
                                + (this.state.fullNameControl.hasError ? "has-error" : "") 
                                + (this.state.fullNameControl.hasSuccess ? "has-success" : "")}>
                                <label htmlFor ="fullName">Full Name</label>
                                <input id="fullName" type="text" className="form-control" name="fullName" required
                                    value={this.state.employee.fullName} 
                                    onChange={this.handleFullNameChange} 
                                    onBlur={this.handlefullNameControl}/>
                                    { this.state.fullNameControl.hasError ? 
                                        <span className="help-block">
                                            Full Name is required
                                        </span>
                                        : null }
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" className="form-control" name="email" required
                                    value={this.state.employee.email} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input id="phoneNumber" type="text" className="form-control" name="phoneNumber" 
                                    value={this.state.employee.phoneNumber} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label>Contact Preference</label>
                                <div className="form-control">
                                <label className="radio-inline">
                                    <input type="radio" name="contactPreference" value="email" onChange={this.handleRadioChange}/>
                                    Email
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="contactPreference" value="phone" onChange={this.handleRadioChange}/>
                                    Phone
                                </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Gender</label>
                                <div className="form-control">
                                <label className="radio-inline">
                                    <input type="radio" name="gender" value="male" onChange={this.handleRadioChange}/>
                                    Male
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="gender" value="female" onChange={this.handleRadioChange}/>
                                    Female
                                </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-control">
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="isActive" onChange={this.handleCheckboxChange}/>Is Active
                                </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                    <select id="department" name="department" className="form-control" onChange={this.handleSelectChange}>
                                        {departments.map(department =>(
                                            <option value={department.id} key={department.id} >{department.name}</option>
                                        ))}
                                    </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <DatePicker className="form-control" 
                                    id="dateOfBirth" name="dateOfBirth" selected={this.state.employee.dateOfBirth} onChange={this.handleDateChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="photoPath">Photo Path</label>
                                <input id="photoPath" type="text" className="form-control"
                                    name="photoPath" onChange={this.handlePhotoChange} />
                            </div>

                            <div className="form-group">
                                {/* this path is from the list page, static/media/ */}
                                { this.state.previewPhoto ? <img src={this.state.employee.photoPath} height="200" width="200" alt=""/> : null }
                            </div>

                            <div className="form-group">
                                <button type="button" className="btn btn-primary" 
                                    onClick={this.handlePhotoToggle}>
                                Show Preview
                                </button>
                            </div>

                            <div className="panel-footer">
                                <button className="btn btn-primary" type="submit" disabled={!this.state.fullNameControl.hasSuccess}>Save</button>
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