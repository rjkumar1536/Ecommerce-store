import React from 'react';

const classNames = {
    '1' : 'fa-solid fa-star text-warning',
    '0' : 'far fa-star',
    'other': "fa-solid fa-star-half-stroke text-warning", 
}
const getClass = (rating) => {
    return classNames[rating];
}

const Rating = ({rating, numReviews}) => {
    return (
        <>
            {
                new Array(5).fill(0).map((review, index) => {
                    let ratingMap = rating - index - 1 >= 0 ? '1' : rating - index > 0 ? 'other' : '0'
                    return <i key = {index} className={getClass(ratingMap)}></i>
                })
            }
            {numReviews} Reviews
        </>
    )
}

export default Rating
