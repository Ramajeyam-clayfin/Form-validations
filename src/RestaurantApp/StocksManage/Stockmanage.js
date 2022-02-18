import React, { useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import * as actionCreators from './Reducers/Actions';
import {Form, Col, Row, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './display.css';



export default function Stockmanage () {
    const stocks = useSelector( (state) => state.stocks.stocks)
    const dispatch = useDispatch();

    const [values, setValues] = useState({});
    const [display, setDisplay] = useState(false);

    const showHide = display ? "edit display-block" : "edit display-none";
    const Hideshow = display ?  "edit display-none" : "edit display-block";
   

    const Additem = (event) => {
        event.preventDefault();
        setValues(values => ({ ...values   }) );
        const push = [ ...stocks, values];
        dispatch(actionCreators.additem(push));
        document.querySelector("Form").reset();
        setDisplay(false);
    }

      let Subqty = (id) => {
        stocks.map( (obj) => {
          if (obj.id === id) {
              if(obj.quantity === 0)
              {
                alert(`quantity can't be less than zero`);
              }
              else{
                dispatch(actionCreators.subqty(id));
              }
          }
          return obj;
        });
      };

    return(
        <div>
            <Button onClick={()=>setDisplay(true)} className={Hideshow} style={{float:'right', marginRight:20}}>Add Item</Button>
            <br/><br/>
            <span className={showHide}>
                <Form onSubmit={Additem}>
                    <Form.Group as={Row}   className="mb-3" >
                        <Form.Label column sm={1}>
                        Item Name :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" required  placeholder="Item Name" name="item" onChange={(e) =>
                            setValues(values => ({ ...values, itemName: e.target.value, id: `${e.target.value}-${Date.now()}` }) ) }/>
                        </Col>
                        <Form.Label column sm={1}>
                        Quantity :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="number" required  placeholder="Quantity" name="quantity" onChange={(e) =>
                            setValues(values => ({ ...values, quantity: e.target.value }) ) } />
                        </Col>
                        <Form.Label column sm={1}>
                        Unit :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Select placeholder="Choose..." name="unit" onChange={(e) =>
                            setValues(values => ({ ...values, unit: e.target.value }) ) }>
                            <option >Choose...</option>
                            <option value='Kg' >Kilo Gram</option>
                            <option value='Lt' >Liters</option>
                        </Form.Select>
                        </Col>
                        <Col>
                            <Button variant="primary" type='submit'>Add Item</Button>
                        </Col>  
                    </Form.Group> 
                </Form>
            </span>
            <div>
                {stocks.length ? stocks.map((s, index)=>(
                    <div key={index}>
                        <ListGroup as="ol" style={{width:600, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div style={{textAlign:'start'}}>
                                        <b>{index+1}</b> . {s.itemName} &nbsp;&nbsp;
                                        {s.quantity} &nbsp;&nbsp; {s.unit} 
                                    </div>
                                </div>Qty &nbsp;&nbsp;
                                <Button onClick={ ()=>dispatch(actionCreators.addqty(s.id)) }>+</Button>&nbsp;&nbsp;
                                <Button onClick={ ()=>Subqty(s.id) } >-</Button>&nbsp;&nbsp;
                                <Button onClick={ ()=>dispatch(actionCreators.removeitem(s.id)) }>Delete</Button>
                            </ListGroup.Item>
                            <br/>
                        </ListGroup>
                       
                    </div>
                ))
                : <div><br/><br/><h3>Add Stock to Display...</h3></div>
            }
            </div>
        </div>
    );
}