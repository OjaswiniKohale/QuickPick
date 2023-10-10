import React from 'react'

export const CartItem = (props) => {
    const url = props.data;

    return (
        <div className='cartItem'>
            <img src={url} className='product-image'/>
            <div className='description'>
                <p>
                    {" "}
                    <b> Orange </b>
                </p>
                <p>$100</p>
            </div>
        </div>
    );
}