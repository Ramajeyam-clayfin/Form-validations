import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import * as actionCreators from './Reducers/Actions';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Menu() {
    const dishes = useSelector( (state) => state.orders.dishes)
    const dispatch = useDispatch();
    

    const Orderdish = (e, id) =>{
        e.preventDefault();
        let push = dishes.find( ({dishId}) => dishId === id );
        dispatch(actionCreators.orderdish(push));
        alert(`${push.dishName} is added to Orders`);
    }
    return (
        <div> 
            <Container>
                <Row>
                    {dishes.map((s, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  variant="top" src={s.dishImg} style={{height:250}} alt=''/>
                                <Card.Body>
                                    <Card.Title>{s.dishName}</Card.Title>
                                    <Card.Text>Price : ₹ {s.dishPrice}</Card.Text>
                                    <Button onClick={(e)=>Orderdish(e, s.dishId)}>Order Dish</Button>  
                                </Card.Body>
                            </Card>
                            <br/><br/>
                        </Col>
                    ))}   
                </Row>
            </Container>
        </div>
    );
}