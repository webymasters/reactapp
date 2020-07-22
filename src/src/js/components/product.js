import React from 'react'

const Product = ({name , img , price}) => {
    const ShopCart = (event) => {
        alert(`${name} added to the cart.`)
    }
    return (
        <div className="productcard">
            <img src={img} />
            <h4>{name}</h4>
            <div className="display-card">
                <p className="price">{price} </p>
                {/* <p className= "star-rating">{rating}</p> */}
                <button onClick={ShopCart} className="shoppn-cart">Add to cart</button>
            </div>
        </div>
    )
}

export default Product;