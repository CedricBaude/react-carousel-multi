import React from 'react';

const Product = (props) => {
    return (
        <div className='card'>
            <img className='product--image' src={props.url} alt="product_image" />
            <h2>{props.name}</h2>
            <p className='price'>{props.price}</p>
            <p>{props.description}</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;