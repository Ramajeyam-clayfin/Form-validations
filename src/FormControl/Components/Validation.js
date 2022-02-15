import validator from 'validator'

const Validation = (value, rules) => {
    let isValid = true;
    let tmpErrorMsg='';
    let tmpisValid ;
    let errorMsg='';
    let checkval;
    
    if (value instanceof Array && value[0] !== undefined)
    {
      checkval = value[0];
    }
    else
    {
      if (value instanceof Array && value[0] === undefined)
        checkval='';
      else
        checkval = value;
    }
    
    for (let rule in rules) 
    {
     
      switch (rule)
      {
      
        case 'minLength': 
            tmpisValid = minLengthValidator(checkval, rules[rule]); 
            // console.log(tmpisValid)
            tmpErrorMsg = !tmpisValid ? `Min Length - ${rules[rule]}` : '' 
            // console.log(tmpErrorMsg)
            isValid = isValid && tmpisValid
            if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)    
        break;
          
        case 'maxLength': 
              tmpisValid = maxLengthValidator(checkval, rules[rule]); 
              tmpErrorMsg = !tmpisValid ? `Max Length - ${rules[rule]}` : '' 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isRequired': 
              tmpisValid = requiredValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Mandatory Field' : '' 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isNumber': 
              tmpisValid = numberValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Numeric Field' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'isEmail': 
              tmpisValid = emailValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Email' : '' 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)    
          break;

          case 'password': 
              tmpisValid = passValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Password' : '' 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)    
          break;
          
          case 'mobile': 
              tmpisValid = mobileValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Mobile Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'zipcode': 
              tmpisValid = zipcodeValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Zipcode' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'aadhar': 
              tmpisValid = aadharValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Aadhar Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'license': 
              tmpisValid = licenseValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid License Number' : '' 
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'passport': 
              tmpisValid = passportValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Passport Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
      
          case 'pancard': 
              tmpisValid = pancardValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid Pancard Number' : ''  
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'ifsc': 
              tmpisValid = ifscValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid IFSC Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'mastercard': 
              tmpisValid = mastercardValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid MasterCard Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'visacard': 
              tmpisValid = visacardValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid VisaCard Number' : ''  
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;
          
          case 'cvv': 
              tmpisValid = cvvValidator(checkval); 
              tmpErrorMsg = !tmpisValid ? 'Invalid CVV Number' : ''   
              isValid = isValid && tmpisValid
              if(!tmpisValid)
                errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'isAlpha': 
            tmpisValid = alphaValidator(checkval); 
            tmpErrorMsg = !tmpisValid ? 'Alpha Field' : '' 
            isValid = isValid && tmpisValid
            if(!tmpisValid)
              errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;

          case 'dob': 
            tmpisValid = dobValidator(checkval); 
            tmpErrorMsg = !tmpisValid ? 'Age should be 18 or above' : ''   
            isValid = isValid && tmpisValid
            if(!tmpisValid)
              errorMsg = setErrorMsg(errorMsg,tmpErrorMsg)  
          break;


          default: 
            isValid = true;
            errorMsg = ''   
          break;
      }
    }

    return  {
        valid: isValid,
        errorMsg: errorMsg
    }    
}
  
    const setErrorMsg = (ErrMessage,message) => {
        let resMessage;

        if (ErrMessage.length > 0) 
        {
            resMessage=ErrMessage.concat(',',message)
        }
        else
            resMessage=message
        return resMessage;
    }

    const minLengthValidator = (value, minLength) => {
        return value.length >= minLength;
    }
  
  
    const maxLengthValidator = (value, maxLength) => {
        return value.length <= maxLength;
    }

    //Check to confirm that field is required
 
    const requiredValidator = value => {
        return value.trim() !== '';	
    }

    // Check to confirm that field has only numbers
    
    const numberValidator = value => {
        if(value.length >0) 
        {
            const pattern = /^[0-9]+$/
            return pattern.test(value);	
        }
        else
            return true;
    }

    const mobileValidator = value => {
      if(value.length >0) 
      {
          const pattern = /^((\\+91-?)|0)?[0-9]{10}$/
          return pattern.test(value);	
      }
      else
          return true;
  }

    // Email validation
  
    const emailValidator = value => {
        if(value.length >0) 
        {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        }
        else
            return true
    }

  const passValidator = value => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) 
    {
      return true
    } else 
    {
      return false
    }
 
  }

  const zipcodeValidator = value => {
    if(value.length >0) 
    {
        const pattern = new RegExp('^[1-9]{1}[0-9]{2}[0-9]{3}$');
        return pattern.test(value);	
    }
    else
        return true;
}

const aadharValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const licenseValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const passportValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$');
      return pattern.test(value);	
  }
  else
      return true;
}

const pancardValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]{1}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const ifscValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^[A-Z]{4}0[A-Z0-9]{6}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const mastercardValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const visacardValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
      return pattern.test(value);	
  }
  else
      return true;
}

const cvvValidator = value => {
  if(value.length >0) 
  {
      const pattern = new RegExp('^[0-9]{3, 4}$');
      return pattern.test(value);	
  }
  else
      return true;
}

const alphaValidator = value => {
  if(value.length >0) {
    const pattern = /^[a-zA-Z\s]*$/
    return pattern.test(value)	
  }
  else
    return true;
}

const dobValidator = value => {
  let newdate = value;
  let date = newdate.getDate();
  let month = newdate.getMonth() + 1;
  let year = newdate.getFullYear();
  let dateString =  `${date < 10 ? `0${date}` : `${date}`}/${ month < 10 ? `0${month}` : `${month}`}/${year}` ;
        
  let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

  if (regex.test(dateString)) {
    let parts = dateString.split("/");
    let dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    let dtCurrent = new Date();

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
      return false ;
    }

    // eslint-disable-next-line eqeqeq
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
      //CD: 11/06/2018 and DB: 15/07/2000. Will turn 18 on 15/07/2018.
      if (dtCurrent.getMonth() < dtDOB.getMonth()) {
        return false ;
      }
      // eslint-disable-next-line eqeqeq
      if (dtCurrent.getMonth() == dtDOB.getMonth()) {
        //CD: 11/06/2018 and DB: 15/06/2000. Will turn 18 on 15/06/2018.
        if (dtCurrent.getDate() < dtDOB.getDate()) {
          return false ;
        }
      }
            
    }
    return true ;
  }
}
  
export default Validation;