import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from './Rating';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, image, description, brand, category, price, countInStock, rating, numReviews} = product;
    return (
        <>
            <Card className="my-3 p-3 rounded">
               <Link to={`/products/${_id}`}>
                    <Card.Img variant="top" src={image} />
               </Link>
                <Card.Body>
                    <Link to={`/products/${_id}`}>
                        <Card.Title as="div">{name}</Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating rating = {rating} numReviews={numReviews}/>
                    </Card.Text>
                    <Card.Text as="h3">
                        ${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
