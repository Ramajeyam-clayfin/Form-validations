import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Radio = (props) => {

	return( 
        
      
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.values.name} style={{textAlign:"end"}}>
                    {props.values.title}
                </Form.Label>
                {props.values.options.map((option,index) => {
                    return (
                        <Col sm={2} key={index} className="radio-inline" style={{textAlign:"start"}}>
                            <Form.Check
                                id = {props.values.name}
                                name={props.values.name}
                                type="radio"
                                label={option.displayValue}
                                value={option.value}
                                checked={ props.values.value === option.value }
                                onChange={props.handleChange}
                                isInvalid={ !!props.values.errorMsg}
                            />
                        
                        </Col>
                    );
                })}
            { props.values.errorMsg  ? <p style={{color: "red"}}>{props.values.errorMsg}</p>: null }
            </Form.Group>
        </div>
    );

}

export default Radio;