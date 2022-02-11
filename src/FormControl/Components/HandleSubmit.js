const HandleSubmit = (formControls) => {
    const formData = {};
    const touched = {};
    const updatedControls = { ...formControls }; 
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
    
    return{
            updatedControls: updatedControls
        }
}

export default HandleSubmit;