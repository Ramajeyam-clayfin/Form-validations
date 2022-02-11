import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkbox = (props) => {
  
  let formControl = "checkbox-inline";

  if (props.values.touched && !props.values.valid) 
  {
    formControl = 'checkbox-inline control-error';
  }
  
	return( 
       
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.values.name}style={{textAlign:"end"}}>
                    {props.values.title}
                </Form.Label>
                <Col sm={5} className={formControl} style={{textAlign:"start"}}>
                {props.values.options.map((option,index) => {
                    return (
                            <Form.Check 
                                key={index}
                                 id = {props.values.name}
                                 name={props.values.name}
                                 onChange={props.handleChange}
                                 label={option.displayValue}
                                 value={option.value}
                                 checked={ props.values.value.indexOf(option.value) > -1 }
                                 type="checkbox" 
                                 isInvalid={ !!props.values.errorMsg}
                            />         
                    );
                })}
                                {/* <Form.Control.Feedback type='invalid'>{ props.errorMsg }</Form.Control.Feedback> */}


                </Col>
                { props.values.errorMsg  ? <p style={{color: "red"}}>{props.values.errorMsg}</p>: null }
            </Form.Group>
        </div>
    );

}

export default Checkbox;