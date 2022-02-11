import Validation from './Validation';

const changeHandler =(event, formControls) => {
    
    const name = event.target.name;
    const updatedControls = { ...formControls }; //all values in formcontrols
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


    
    return  {
        updatedControls: updatedControls, 
        formIsValid: formIsValid
    }  
  

}

export default changeHandler;