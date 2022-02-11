import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Textarea = (props) => {  
  let formControl = "form-control";

  if (props.values.touched && !props.values.valid) 
  {
      formControl = 'form-control control-error';
  }
  
    return (
        <div className="form-group">
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.values.name} style={{textAlign:"end"}}>
                {props.values.title}
                </Form.Label>
                <Col sm={5}>
                <Form.Control 
                    as="textarea" 
                    className={formControl}
                    name={props.values.name}
                    rows={props.values.rows}
                    cols = {props.values.cols}
                    value={props.values.value}
                    onChange={props.handleChange}
                    placeholder={props.values.placeholder} 
                    isInvalid={ !!props.values.errorMsg}
                />
                <Form.Control.Feedback type='invalid'>{ props.values.errorMsg }</Form.Control.Feedback>
                {/* { props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null } */}
            </Col>
            </Form.Group>
        </div>
    )
};

export default Textarea;