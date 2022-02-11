import React, { Component }  from "react";

import {initialState} from './Components/metaData';
import Validation from './Components/Validation';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Dropdown from './Components/Dropdown';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Buttong from './Components/Button';

export default class FormControl extends Component {

    constructor(props){
        super(props);
        this.state = {
            formIsValid: false,
            formControls : initialState
            }
    }
    

    changeHandler = event => {
    
        const name = event.target.name;
        const updatedControls = { ...this.state.formControls }; //all values in formcontrols
        const updatedFormElement = { ...updatedControls[name] }; // in formcontrols stores only the value where the change is happened
      
  
        let value; //used to store the values of where the change is happened
        let selectedOptions; //used to store the values of where the change is happened
        let newValArray; //used to store the values of where the change is happened
  
        if (updatedControls[name].value instanceof Array &&
            updatedControls[name].type === 'select' )                 //check if the change is happened in dropdown box
        {
            selectedOptions = event.target.selectedOptions;
            // newValArray = [...selectedOptions].map(option => option.value);
            value = selectedOptions.value;
        }
        else 
        {
            value = event.target.value;

            if( updatedControls[name].value instanceof Array &&
                updatedControls[name].type === 'checkbox' )         //check if the change is happened in checkbox box
            {
                if(updatedControls[name].value.indexOf(value) > -1)  // ckecks if checkbox value is having the same value or not using indexof array method
                {
                    newValArray = updatedControls[name].value.filter(s => s !== value) // filter and stores in newValArray except the same value that is passed 
               
                } 
                else 
                {
                    newValArray = [...updatedControls[name].value, value]; // if no duplicate values passed then using spread concat the values
                }
                value = newValArray; // stores the values in newValArray into value
            }
            else    //else the values are stored in values 
            {
                value = event.target.value
            }
        }
       
        updatedFormElement.value = value; // change the value  which has been changed and stores in locally
        updatedFormElement.touched = true;
  
        let ValidationResult = Validation(value, updatedFormElement.validationRules);
        updatedFormElement.valid = ValidationResult.valid; // change the valid  which has been changed and stores in locally

        if ((!updatedFormElement.valid) && updatedFormElement.touched) //for update the error message value
        {
          updatedFormElement.errorMsg = ValidationResult.errorMsg // change the errorMsg  which has been changed and stores in locally
        }
        else 
        {
          updatedFormElement.errorMsg = ''
        }
  
        updatedControls[name] = updatedFormElement; // change the local data where the change is happened
  
        let formIsValid = true;

        for (let inputIdentifier in updatedControls) 
        {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
  
        this.setState(
            {
                formControls: updatedControls, // here we change the global value according to local data
                formIsValid: formIsValid
            }
        );
  
    }

    formSubmitHandler = () => {
        const formData = {};
        const touched = {};
        const updatedControls = { ...this.state.formControls }; 
        let updatedFormElement = { };

        for (let formElementId in this.state.formControls) 
        {
            touched[formElementId] = this.state.formControls[formElementId].touched;
            formData[formElementId] = this.state.formControls[formElementId].value; // in formData{} stores only values of each datas
        }

        const delselect =  Object.keys(touched).filter((f) => touched[f] === false); 

        if(delselect.length !== 0){
            for(let object in delselect ){
 
                updatedFormElement = { ...updatedControls[delselect[object]] };
                updatedFormElement.errorMsg = `Oops you missed ${delselect[object]} !! `
                updatedControls[delselect[object]] = updatedFormElement;
            }
        }
        else {
            let newLine = '\r\n';
            alert(
            ` Name : ${formData.name}${newLine} Age : ${formData.age}${newLine} Email : ${formData.email}${newLine} Mobile : ${formData.mobile}${newLine} Address : ${formData.line1}, ${formData.line2}, ${formData.city}, ${formData.state}, ${formData.zipcode} - ${formData.country}${newLine} What would you use the library for : ${formData.radio}${newLine} Which sections of the library would you like access to : ${formData.checkbox}${newLine} About : ${formData.about} `
            );
        }
        
        this.setState(
            {
                formControls: updatedControls
            }
        ); 
    }

    handleClearForm = () => {

      this.setState(
        {
            formControls: initialState,
            formIsValid: false
        }
      );
    }


    render() {
        return(
            <div>
                {/* Name Field */}
                <Input handleChange={this.changeHandler} values={this.state.formControls.name} /> 

                <Input handleChange={this.changeHandler} values={this.state.formControls.age} />

                <Radio handleChange={this.changeHandler} values={this.state.formControls.gender} /> 

                <Input handleChange={this.changeHandler} values={this.state.formControls.email} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.mobile} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.line1} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.line2} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.city} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.state} />

                <Input handleChange={this.changeHandler} values={this.state.formControls.zipcode} />

                <Dropdown handleChange={this.changeHandler} values={this.state.formControls.country} /> <br/>

                <Radio handleChange={this.changeHandler} values={this.state.formControls.radio} /> <br/>

                <Checkbox handleChange={this.changeHandler} values={this.state.formControls.checkbox} /> <br/>

                <Textarea handleChange={this.changeHandler} values={this.state.formControls.about} />

                <Buttong 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    disabled={! this.state.formIsValid}
                /> { /*Submit */ }
                
                <Buttong
                    action = {this.handleClearForm}
                    type = {'secondary'}
                    title = {'Clear'}
                    style={buttonStyle}
                /> {/* Clear the form */}
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }