import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Prompt } from 'react-router-dom';
 
import 'react-datepicker/dist/react-datepicker.css';

function importAll(r) {
    let images = {};
    for (var item of r.keys()) {
      images[item.replace('./', '')] = r(item); 
    }
    return images;
  }
  
const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

const defaultEmployee = { 
    fullName: '',
    email: '',
    phoneNumber:'',
    contactPreference: '',
    gender: '',
    dateOfBirth: new Date(),
    photoPath: '',
    password: '',
    confirmPassword: ''
};

class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            employee: Object.assign({}, defaultEmployee),
            previewPhoto: false,
            employeeForm : {
                invalid: true
            },
            fullNameControl: {
                touched: false,
                hasError: false,
                hasSuccess: false,
            },
            emailControl: {
                touched: false,
                hasError: false,
                hasSuccess: false,
                invalid: false
            },
            phoneNumberControl: {
                touched: false,
                hasError: false,
                hasSuccess: false,
                invalid: undefined
            },
            contactPreferenceControl: {
                touched: false,
                hasError: true
            },
            isActiveControl: {
                touched: false,
                invalid: true
            },
            genderControl: {
                touched: false,
                hasError: true
            },
            departmentControl: {
                selectedId: null,
                touched: false,
                hasError: false
            },
            passwordControl: {
                touched: false,
                hasError: false
            },
            confirmPasswordControl: {
                touched: false,
                hasError: false
            },
            passwordMatch: true,
            dirty: false
        };

        this.handleChange          = this.handleChange.bind(this);
        this.handleRadioChange     = this.handleRadioChange.bind(this);
        this.handleCheckboxChange  = this.handleCheckboxChange.bind(this);
        this.handleSelectChange    = this.handleSelectChange.bind(this);
        this.handleDateChange      = this.handleDateChange.bind(this);
        this.handlePhotoChange     = this.handlePhotoChange.bind(this);
        this.handlePhotoToggle     = this.handlePhotoToggle.bind(this);
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.validate              = this.validate.bind(this);
    }

    // handle the input change
    handleChange(event) {
        let employee = this.state.employee;
        employee[event.target.id] = event.target.value;
        this.setState({employee: employee});
        this.validate(event);
    }

    // handle the radio button change
    handleRadioChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.value;
        this.setState({employee: employee});
        this.validate(event);
        this.handleDynamicRequired(event);
    }

    // handle the checkbox change
    handleCheckboxChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.checked;
        this.setState({employee: employee});
        this.validate(event);
    }

    // handle the select change
    handleSelectChange(event) {
        let employee = this.state.employee;
        employee[event.target.name] = event.target.value;
        this.setState({employee: employee});
        this.validate(event);
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

    // handle form submit
    handleSubmit(event) {
        console.log(JSON.stringify(this.state.employee));
        event.preventDefault();
    }

    // handle validation
    validate(event) {
        // fake dirty check
        for (var key in this.state.employee) {
            console.log(key, this.state.employee[key]);
            if(this.state.employee[key] !== defaultEmployee[key]){
                this.setState({dirty: true});
            }
        }
        
        let hasError = false;
        let control = `${event.target.id}Control`;
        if(event.target.type === "radio" || event.target.type === "checkbox") {
            control = `${event.target.name}Control`;
        }
        // required
        if(event.target.required) {
            if(event.target.value === null || event.target.value.trim().length === 0){
                this.setState({[control]: {
                    touched: true,
                    hasError: true,
                    hasSuccess: false
                }}, function(){
                    this.handleSaveButton();
                });
                hasError = true;
            } else {
                this.setState({[control]: {
                    touched: true,
                    hasError: false,
                    hasSuccess: true
                }}, function(){
                    this.handleSaveButton();
                });
            }
        } else {
            this.setState({[control]: {
                touched: true,
                hasError: false,
                hasSuccess: false
            }}, function(){
                this.handleSaveButton();
            });
        }

        // pattern match test
        if(event.target.required && event.target.pattern){
            if(RegExp(event.target.pattern).test(event.target.value)){
                this.setState(prevState => ({[control]: {
                    touched: true,
                    invalid: false,
                    hasError: false,
                    hasSuccess: true
                }}));
            } else {
                if(!hasError){
                    // invalid pattern
                    this.setState(prevState => ({[control]: {
                        touched: true,
                        invalid: true,
                        hasError: true,
                        hasSuccess: prevState[control].hasSuccess
                    }}));
                    hasError = true;
                }
            }
        }
    }

    // enable/diable the form button
    handleSaveButton() {
        let email = document.getElementById("email");
        let phoneNumber = document.getElementById("phoneNumber");
        let isActive = document.getElementsByName("isActive")[0];
        let department = document.getElementById("department");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirmPassword");
        if((this.state.fullNameControl.touched && this.state.fullNameControl.hasSuccess) && 
            (this.state.contactPreferenceControl.touched && !this.state.contactPreferenceControl.hasError) &&
            ((email.required && this.state.emailControl.touched && this.state.emailControl.hasSuccess && !this.state.emailControl.invalid) || !email.required) && 
            ((phoneNumber.required && this.state.phoneNumberControl.touched && this.state.phoneNumberControl.hasSuccess) || !phoneNumber.required) &&
            (this.state.genderControl.touched && this.state.genderControl.hasSuccess) && 
            ((isActive.required && !this.state.isActiveControl.invalid) || !isActive.required) &&
            ((department.required && (this.state.departmentControl.touched && !this.state.departmentControl.hasError)) || !department.required) &&
            ((password.required && (this.state.passwordControl.touched && !this.state.passwordControl.hasError)) || !password.required) &&
            ((confirmPassword.required && (this.state.confirmPasswordControl.touched && !this.state.confirmPasswordControl.hasError)) || !confirmPassword.required) &&
            this.state.employee.password === this.state.employee.confirmPassword){
            this.setState({employeeForm : {invalid: false}});
        } else {
            this.setState({employeeForm : {invalid: true}});
        }
    }

    // handle dynamic required validation
    handleDynamicRequired(event) {
        if(event.target.value === "email") {
            this.enableHasError("email", true);
            let email = document.getElementById("email");
            let control = "emailControl";
            // pattern match test
            if(this.state.employee.contactPreference==="email" && email.pattern){
                if(RegExp(email.pattern).test(email.value)){
                    // valid
                    this.setState(prevState => ({[control]: {
                        touched: true,
                        invalid: false,
                        hasError: false,
                        hasSuccess: true
                    }}));
                } else {
                    // invalid pattern
                    this.setState(prevState => ({[control]: {
                        touched: true,
                        invalid: true,
                        hasError: true,
                        hasSuccess: false
                    }}));
                }
            }
            this.enableHasError("phoneNumber", false);
        } else if(event.target.value === "phoneNumber") {
            this.enableHasError("phoneNumber", true);
            this.enableHasError("email", false);
        }
    }

    // enable/disabe the hasError property
    enableHasError(controlName, enable) {
        let control = `${controlName}Control`;
        let value = document.getElementById(controlName).value;
        if(enable && (value === null || value.trim().length === 0)){
            this.setState(prevState => ({[control]: {
                hasError: true,
                hasSuccess: false,
            }}), function(){
                this.handleSaveButton();
            });
        } else {
            this.setState(prevState => ({[control]: {
                hasError: false,
                hasSuccess: false
            }}), function(){
                this.handleSaveButton();
            });
        }
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
                                    onChange={this.handleChange} 
                                    onBlur={this.validate}/>
                                    { this.state.fullNameControl.hasError ? 
                                        <span className="help-block">
                                            Full Name is required
                                        </span>
                                        : null }
                            </div>

                            <div className={"form-group " 
                                + (this.state.emailControl.hasError ? "has-error" : "") 
                                + (this.state.emailControl.hasSuccess ? "has-success" : "")}>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" className="form-control" name="email" 
                                    required={this.state.employee.contactPreference==="email"}
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    value={this.state.employee.email} 
                                    onChange={this.handleChange}
                                    onBlur={this.validate}/>
                                    { this.state.emailControl.hasError ? 
                                        <span className="help-block">
                                            Email is required
                                        </span>
                                        : null }
                                    { this.state.emailControl.invalid ? 
                                        <span className="help-block">
                                            Email is invalid
                                        </span>
                                        : null }    
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input id="phoneNumber" type="text" className="form-control" name="phoneNumber"
                                    required={this.state.employee.contactPreference==="phoneNumber"}
                                    value={this.state.employee.phoneNumber} 
                                    onChange={this.handleChange}
                                    onBlur={this.validate}/>
                                    { this.state.phoneNumberControl.hasError ? 
                                        <span className="help-block">
                                            Phone Number is required
                                        </span>
                                        : null }
                            </div>

                            <div className={"form-group " + (this.state.contactPreferenceControl.hasError ? "has-error" : "")}>
                                <label>Contact Preference</label>
                                <div className="form-control">
                                <label className="radio-inline">
                                    <input type="radio" name="contactPreference" value="email" required 
                                        onChange={this.handleRadioChange}
                                        onBlur={this.validate}/>
                                    Email
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="contactPreference" value="phoneNumber" required onChange={this.handleRadioChange}/>
                                    Phone
                                </label>
                                </div>
                                { this.state.contactPreferenceControl.hasError ? 
                                        <span className="help-block">
                                            Contact Preference is required
                                        </span>
                                        : null }
                            </div>

                            <div className={"form-group " + (this.state.genderControl.hasError ? "has-error" : "")}>
                                <label>Gender</label>
                                <div className="form-control">
                                <label className="radio-inline">
                                    <input type="radio" name="gender" value="male" required onChange={this.handleRadioChange}/>
                                    Male
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="gender" value="female" required onChange={this.handleRadioChange}/>
                                    Female
                                </label>
                                </div>
                                { this.state.genderControl.hasError ? 
                                        <span className="help-block">
                                            Gender is invalid
                                        </span>
                                        : null }
                            </div>

                            <div className="form-group">
                                <div className="form-control">
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="isActive" required onChange={this.handleCheckboxChange}/>Is Active
                                </label>
                                </div>
                                { this.state.isActiveControl.invalid ? 
                                        <span className="help-block">
                                            Is Active is required
                                        </span>
                                        : null }
                            </div>

                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                    <select id="department" name="department" className="form-control" required defaultValue={''}
                                        onChange={this.handleSelectChange}
                                        onBlur={this.validate}>
                                        <option value="" disabled>Select Department</option>
                                        {departments.map(department =>(
                                            <option value={department.id} key={department.id} >{department.name}</option>
                                        ))}
                                    </select>
                                    { this.state.departmentControl.hasError ? 
                                        <span className="help-block">
                                            Department is required
                                        </span>
                                        : null }
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

                            <div className={"form-group " 
                                + (this.state.passwordControl.hasError ? "has-error" : "")}>
                                <label htmlFor ="password">Password</label>
                                <input id="password" type="text" className="form-control" name="password" required
                                    value={this.state.employee.password} 
                                    onChange={this.handleChange} 
                                    onBlur={this.validate}/>
                                    { this.state.passwordControl.hasError ? 
                                        <span className="help-block">
                                            Password is required
                                        </span>
                                        : null }
                            </div>

                            <div className={"form-group " 
                                + (this.state.confirmPasswordControl.hasError ? "has-error" : "")}>
                                <label htmlFor ="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword" type="text" className="form-control" name="confirmPassword" required
                                    value={this.state.employee.confirmPassword} 
                                    onChange={this.handleChange} 
                                    onBlur={this.validate}/>
                                    { this.state.confirmPasswordControl.hasError ? 
                                        <span className="help-block">
                                            Confirm Password is required
                                        </span>
                                        : null }
                                    { this.state.employee.password !== this.state.employee.confirmPassword ? 
                                        <span className="help-block">
                                            Password and Confirm Password does not match
                                        </span>
                                        : null }
                            </div>

                            <div className="panel-footer">
                                <button className="btn btn-primary" type="submit" disabled={this.state.employeeForm.invalid}>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
                Generated Model :{JSON.stringify(this.state.employee)}
                <Prompt
                    when={this.state.dirty}
                    message={location => 'Are you sure you want to discard your changes?'}
                />
            </div>
        )
    }
}

export default CreateEmployee;