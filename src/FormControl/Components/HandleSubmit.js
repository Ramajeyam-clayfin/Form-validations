import {initialState} from './metaData';

const HandleSubmit = (formControls) => {
    const formData = {};
    const touched = {};
    let updatedControls = { ...formControls }; 
    let updatedFormElement = { };

    for (let formElementId in formControls) 
    {
        touched[formElementId] = formControls[formElementId].touched;
        formData[formElementId] = formControls[formElementId].value; // in formData{} stores only values of each datas
    }

    const delselect =  Object.keys(touched).filter((f) => touched[f] === false); 

    if(delselect.length !== 0){
        for(let object in delselect ){

            updatedFormElement = { ...updatedControls[delselect[object]] };
            if(delselect[object] === 'gender'|| delselect[object] === 'country' || delselect[object] === 'radio' || delselect[object] === 'checkbox')
            {
                updatedFormElement.errorMsg = `Please choose atleast one option!! `
            }
            else{
                updatedFormElement.errorMsg = `Please fillout this field!! `
            }
            updatedControls[delselect[object]] = updatedFormElement;
        }
    }
    else {
        let newLine = '\r\n';
        alert(
        ` Name : ${formData.name}${newLine} Age : ${formData.age}${newLine} Password : ${formData.password}${newLine} Gender : ${formData.gender}${newLine} Email : ${formData.email}${newLine} Mobile : ${formData.mobile}${newLine} Aadhar Number : ${formData.aadhar}${newLine} Driving License : ${formData.license}${newLine} Passport : ${formData.passport}${newLine} Pancard : ${formData.pancard}${newLine} IFSC Code : ${formData.ifsc}${newLine} Master card : ${formData.mastercard}${newLine} Visa card : ${formData.visacard}${newLine} Address : ${formData.line1}, ${formData.line2}, ${formData.city}, ${formData.state}, ${formData.zipcode} - ${formData.country}${newLine} What would you use the library for : ${formData.radio}${newLine} Which sections of the library would you like access to : ${formData.checkbox}${newLine} About : ${formData.about} `
        );
        updatedControls = {...initialState};
    }
    
    return{
            updatedControls: updatedControls
        }
}

export default HandleSubmit;