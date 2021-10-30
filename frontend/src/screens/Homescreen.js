import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const Homescreen = () => {
    return (
        <>
            <Row>
                {
                    products.map((product, index) => 
                        <Col sm={12} md={9} lg={6} xl={3} key={index}>
                            <Product product={product} key={product._id} />
                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export default Homescreen
