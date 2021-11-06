import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className="overlay">
             <Spinner animation="border" role="status" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
