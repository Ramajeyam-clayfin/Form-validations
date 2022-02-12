export let initialState =   {
        
    name : { 
      name:'name',
        type: 'text',
        text: '',
        title:"Name : ",
        value: '',
        placeholder: 'Enter Your Name',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 4,
          maxLength: 20,
          isAlpha: true,
          isRequired: true,
         },
      },

      age : {  
        name:'age',
        text: '',
        type: 'number',
        title:"Age : ",
        value: '',
        placeholder: 'Enter Your Age',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 1,
          maxLength: 2,
          isRequired: true,
          isNumber: true
         },
      },

      password: {
        name:'password',
        text: 'Min 8 characters at least 1 Uppercase , 1 Lowercase, 1 Number and 1 Special Character',
        type: 'text',
        title:"Password : ",
        value: '',
        placeholder: '',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 8,
          isRequired: true,
          password: true
        },
      },


      gender: {
        name:'gender',
        text: '',
        type: 'radio',
        title:"Gender : ",
        value: '',
        placeholder: 'Gender',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
        },
        options: [
          { value: 'Male', displayValue: 'Male' },
          { value: 'Female', displayValue: 'Female'}
        ]
      },

      email: {
        name:'email',
        text: '',
        type: 'text',
        title:"Email : ",
        value: '',
        placeholder: 'Enter Email ID',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          isRequired: true,
          isEmail: true
        },
      },

      mobile : {  
        name:'mobile',
        text: '',
        type: 'number',
        title:"Mobile : ",
        value: '',
        placeholder: 'Enter Your Mobile Number',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          maxLength: 13,
          isRequired: true,
          isNumber: true,
          mobile: true
        },
      },

      aadhar: {
        name:'aadhar',
        text: 'Ex: 1234 1234 1234',
          type: 'text',
          title:"Aadhar Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 14,
              isRequired: true,
              aadhar: true
          }
      },

      license: {
        name:'license',
        text: 'Ex: HR-0619850034761 OR HR06 19850034761',
          type: 'text',
          title:"Driving License : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 16,
              isRequired: true,
              license: true
          }
      },
      
      passport: {
        name:'passport',
        text: 'Ex: A2096457 OR A21 90457',
          type: 'text',
          title:"Passport Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 8,
              isRequired: true,
              passport: true
          }
      },
      
      pancard: {
        name:'pancard',
        text: 'Ex: BNZAA2318J',
          type: 'text',
          title:"Pancard Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 10,
              isRequired: true,
              pancard: true
          }
      },

      ifsc: {
        name:'ifsc',
        text: 'Ex: SBIN0125620',
          type: 'text',
          title:"IFSC Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 11,
              isRequired: true,
              ifsc: true
          }
      },
      
      mastercard: {
        name:'mastercard',
        text: 'Ex: 5114496353984312',
          type: 'text',
          title:"MasterCard Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 16,
              isRequired: true,
              mastercard: true
          }
      },

      visacard: {
        name:'visacard',
        text: 'Ex: 4155279860457',
          type: 'text',
          title:"VisaCard Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 13,
              isRequired: true,
              visacard: true
          }
      },

      cvv: {
        name:'cvv',
        text: 'Ex: 561',
          type: 'text',
          title:"CVV Number : ",
          value: '',
          placeholder: '',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
              minLength: 3,
              isRequired: true,
              cvv: true
          }
      },

        line1: {
          name:'line1',
          text: '',
            type: 'text',
            title:"Address : ",
            value: '',
            placeholder: 'Address Line 1',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 2,
                isRequired: true
            }
        },
        line2: {
          name:'line2',
          text: '',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'Address Line 2',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
            minLength: 4,
            isRequired: true
            }
        },
        city: {
          name:'city',
          text: '',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'City',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isAlpha: true,
                isRequired: true
            }
        },
        state: {
          name:'state',
          text: '',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'State',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isAlpha: true,
                isRequired: true
            }
        },
        zipcode: {
          name:'zipcode',
          text: '',
            type: 'number',
            title:" ",
            value: '',
            placeholder: 'Zipcode',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 6,
                isRequired: true,
                isNumber: true,
                zipcode: true
            }
        },
        country: {
          name:'country',
          text: '',
            type: 'select',
            title:"Country : ",
            value: '',
            placeholder: 'Country',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
              isRequired: true,
            },
            options: [
              { value: 'India', displayValue: 'India' },
              { value: 'Australia', displayValue: 'Australia'},
              { value: 'China', displayValue: 'China'}
            ]
          },


      radio: {
        name:'radio',
        text: '',
        title:'What would you use the library for?',
        type: 'radio',
        value: '',
        placeholder: 'What would you use the library for?',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
            isRequired: true,
        },
        options: [
          { value: 'Reference', displayValue: 'Reference' },
          { value: 'In-house reading', displayValue: 'In-house reading' },
          { value: 'Borrowing', displayValue: 'Borrowing' }
        ]
      },

      checkbox: {
        name:'checkbox',
        text: '',
        title:'Which sections of the library would you like access to?',
        type: 'checkbox',
        value: [],
        placeholder: ' Which sections of the library would you like access to?',
        valid: false,
        errorMsg: '',
        touched: false,     
        validationRules: {
            isRequired: true,
        },
        options: [
          { value: 'Magazines', displayValue: 'Magazines' },
          { value: 'Fiction', displayValue: 'Fiction' },
          { value: 'Non-Fiction', displayValue: 'Non-Fiction' },
          { value: 'Electronic', displayValue: 'Electronic' },
          { value: 'Research & Reference', displayValue: 'Research & Reference' }
        ]
      },
      
      about: {
        name:'about',
        text: '',
        type: 'textarea',
        title:"About : ",
        value: '',
        placeholder: 'Tell About Yourself...',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          isRequired: true
        },
      },
  };