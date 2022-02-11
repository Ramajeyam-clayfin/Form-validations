export let initialState =   {
        
    name : { 
      name:'name',
        type: 'text',
        title:"Name : ",
        value: '',
        placeholder: 'Enter Your Name',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 4,
          maxLength: 20,
          isRequired: true,
         },
      },

      age : {  
        name:'age',
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

      gender: {
        name:'gender',
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
        type: 'number',
        title:"Mobile : ",
        value: '',
        placeholder: 'Enter Your Mobile Number',
        valid: false,
        errorMsg: '',
        touched: false,
        validationRules: {
          minLength: 10,
          maxLength: 12,
          isRequired: true,
          isNumber: true
        },
      },

        line1: {
          name:'line1',
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
            type: 'text',
            title:"",
            value: '',
            placeholder: 'City',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isRequired: true
            }
        },
        state: {
          name:'state',
            type: 'text',
            title:"",
            value: '',
            placeholder: 'State',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 4,
                isRequired: true
            }
        },
        zipcode: {
          name:'zipcode',
            type: 'number',
            title:" ",
            value: '',
            placeholder: 'Zipcode',
            valid: false,
            errorMsg: '',
            touched: false,
            validationRules: {
                minLength: 6,
                isRequired: true
            }
        },
        country: {
          name:'country',
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