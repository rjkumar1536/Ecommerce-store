import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Image, ListGroup, Row, Col, ListGroupItem, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../modules/actions/productActions';

const Productscreen = ({history, match}) => {
    const {id} = match.params;

    const {product} = useSelector(state => state.productDetails);
    const dispatch = useDispatch();
    const [quantity, setquantity] = useState(1);

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [id]);

    const addToCart = () => {
        history.push(`/cart/${id}?qty=${quantity}`);
    }

    const {_id, name, image, description, brand, category, price, countInStock, rating, numReviews} = product;
    return (
        <>
            <Link className="btn btn-light" to="/" >Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={image} fluid  thumbnail />
                </Col>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{category}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>{name}</h5>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating rating={rating} numReviews={numReviews}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>{description}</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <Row>
                                <Col>Price</Col>
                                <Col>${price}</Col>
                            </Row>
                        </ListGroupItem>   
                        <ListGroupItem>
                            <Row>
                                <Col>Status</Col>
                                <Col>{countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                            </Row>
                        </ListGroupItem>
                        {countInStock > 0 && <ListGroupItem>
                            <Row>
                                <Col>Quantity</Col>
                                <Col>
                                    <Form.Select onChange= {(e) => setquantity(e.target.value)}>
                                        {
                                            [...Array(countInStock)].fill(0).map((x, qty) => {
                                                return <option key = {qty} value={qty+1}>{qty+1}</option>
                                            })
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </ListGroupItem>}
                        <ListGroupItem>
                            <Button variant="dark" className="d-flex" onClick = {addToCart}>ADD TO CART</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row> 
        </> 
    )
}

export default Productscreen
