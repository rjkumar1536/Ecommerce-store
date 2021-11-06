import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../modules/actions/productActions';

const Homescreen = () => {
    const {products} = useSelector(state => state.productList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

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
