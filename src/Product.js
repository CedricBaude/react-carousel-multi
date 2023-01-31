import React from 'react';

const Product = () => {
    return (
        <div className='card'>
            <img className='product--image' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="product_image" />
            <h2>Sport sneaker</h2>
            <p className='price'>$20,99</p>
            <p>Some description about product ..</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;