/* eslint-disable eqeqeq */
import React from 'react';
import moment from 'moment';

export default class DateAge extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            dob: null,
        }
    }
     handleChange =(event)=> {
        // let dateControl = document.querySelector('input[type="date"]');
        // let newdate = dateControl.valueAsDate;
        let newdate = event.target.valueAsDate;

        let date = newdate.getDate();
        let month = newdate.getMonth() + 1;
        let year = newdate.getFullYear();
        let dateString =  `${date < 10 ? `0${date}` : `${date}`}/${ month < 10 ? `0${month}` : `${month}`}/${year}` ;

        this.setState( { dob: dateString} )
        
        let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

        if (regex.test(dateString)) {
            let parts = dateString.split("/");
            let dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            let dtCurrent = new Date();
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return console.log("Eligibility 18 years ONLY. 1") ;
            }

            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

                //CD: 11/06/2018 and DB: 15/07/2000. Will turn 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return console.log("Eligibility 18 years ONLY. 2") ;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turn 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return console.log("Eligibility 18 years ONLY. 3") ;
                    }
                }
            
            }
            return console.log("you are 18 years old and Eligible.") ;
        }
        else {
            return console.log("Enter date in dd/MM/yyyy format ONLY.") ;
        }
      }

    render(){
        return(
            <div>
                <label>Enter D.O.B : </label>
                <input type='date' onChange={(event)=>this.handleChange(event)}  />
                <button onClick={this.handleChange}>Click</button>
                <br/><br/><br/>
                {this.state.dob}<br/>
                {moment().format('L')}<br/>
            </div>
        );
    }
}