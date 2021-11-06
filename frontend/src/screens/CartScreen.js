import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { Button, Image, ListGroup, Row, Col, ListGroupItem, Form } from 'react-bootstrap';
import {addCartItem, deleteCartItem, removeCartItem} from "../modules/actions/cartActions";
import Message from "../components/Message";


const CartScreen = ({location, match, history}) => {
    
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const {id} = match.params;
    const quantity = Number(new URLSearchParams(location.search).get('qty'));

    useEffect(() => {
        if(id) {
            dispatch(addCartItem(id, quantity))
        }
    }, []);

    const addToCart = (id) => {
        dispatch(addCartItem(id, 1));
    }

    const deleteFromCart = (id) => {
        dispatch(deleteCartItem(id));
    }

    const removeFromCart = (id) => {
        dispatch(removeCartItem(id, 1));
    }

    const checkoutHandler = () => {
        history.push("/login?redirect=shipping");
    }

    return (
        <>
            <Button className="btn btn-light" onClick={() => history.go(-1)} >Go Back</Button>
            <Row>
                <Col xs = {9}>
                    {cartItems.length === 0 && <Message variant="info" children = "Shopping Cart is Empty" />}
                    <ListGroup xs={6}>
                        {
                            cartItems.map(({id, name, price, quantity, image}) => 
                                    <ListGroup.Item key={id}>
                                        <Row className="d-flex">
                                            <Col xs={1} >
                                                <Image src={image} thumbnail  />
                                            </Col>
                                            <Col xs={3}>
                                                <Link to={`/products/${id}`}>
                                                    <p>{name}</p>
                                                </Link>
                                            </Col>
                                            <Col xs={2}>
                                                <p>${(price*quantity).toFixed(2)}({quantity} item)</p>
                                            </Col>
                                            <Col xs={1} class="pr-0">
                                                <Button variant="dark" onClick={() => addToCart(id)}>+</Button>
                                            </Col>
                                            <Col xs={1}>
                                                <Button variant="dark" onClick={() => removeFromCart(id)}>-</Button>
                                            </Col>
                                            <Col xs={1}>
                                                <Button variant="danger" onClick={() => deleteFromCart(id)}>
                                                    <i className="fas fa-trash"></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Col>
                <Col xs={3}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    <h5>Subtotal</h5>
                                </Col>
                                <Col>
                                    <h5>{cartItems.reduce((acc, cartItem) => acc + cartItem.quantity,0)} Items</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                     <h5>${cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price,0).toFixed(2)}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Button variant="dark" className="d-flex" onClick = {checkoutHandler}>PROCEED TO CHECKOUT</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default CartScreen
