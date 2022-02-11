import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Dropdown = (props) => {
    let formControl = "";

    if (props.values.touched && !props.values.valid) 
    {
        formControl = 'control-error';
	}

	return(
		
        <div className="form-group">
			<Form.Group as={Row} className="mb-3">
			   <Form.Label column sm={3}  htmlFor={props.values.name} style={{textAlign:"end"}}>
			   	{props.values.title}
			   </Form.Label>
			<Col sm={5}>
				<Form.Select
					id = {props.values.name}
					name={props.values.name}
					multiple={props.values.multiple}
					value={props.values.value}
					onChange={props.handleChange}
					className={formControl}
				>
					<option value="" disabled>{props.values.placeholder}</option>
					{props.values.options.map((option,index) => {
						return (
							<option
								key={index}
								value={option.value}
							>
								{option.displayValue}
							</option>
						);
					})}
				</Form.Select>
			</Col>
		    
			{ props.values.errorMsg  ? <p style={{color: "red"}}>{props.values.errorMsg}</p>: null }
			</Form.Group>
		</div>
	)
}	


export default Dropdown;