import React, { useState, useEffect } from "react";
import "../styles/Stars.css";

const Cart = (props) => {
  const { name, price, img, makeCart, currentCart } = props;
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0); // Initialize rating state
  const [total, setTotal] = useState(price.toFixed(2));

  // Update total when quantity changes
  useEffect(() => {
    setTotal((price * quantity).toFixed(2));
  }, [quantity]);

  const cartAddition = (name, price, img) => {
    const existingProduct = currentCart.find(
      (product) => product.name === name,
    );
    let updatedCart;
    if (!existingProduct) {
      updatedCart = [
        ...currentCart,
        {
          name,
          price,
          img,
          quantity,
        },
      ];
    } else {
      updatedCart = [...currentCart];

      for (let item of updatedCart) {
        if (item.name === existingProduct.name) {
          item.quantity += quantity;
        }
      }
    }
    makeCart(updatedCart);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeFromCart = () => {
    setQuantity(0);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value)); // Convert value to a number
  };

  return (
    <div
      className="card border border-3 rounded"
      style={{ width: "18rem", height: "100%" }}
    >
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ maxHeight: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">Rs.{price.toFixed(2)} per item</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>Quantity:&nbsp;&nbsp;</span>
            <div className="input-group">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="input-group-text">{quantity}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>Total:</span>
            <strong>Rs.{total}</strong>
          </div>
        </li>
      </ul>
      <div className="card-footer d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary btn-sm"
          style={{ margin: "0 auto" }}
          onClick={() => cartAddition(name, total, img)}
        >
          Add to Cart
        </button>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="mb-3">
            <fieldset className="starability-basic">
              <h6>Review:</h6>
              <input
                type="radio"
                id={`rating-${name}`} // Use a unique identifier based on the item name
                name={`review-${name}[rating]`} // Use a unique name attribute
                value="1"
                checked={rating === 1} // Check if the rating matches
                onChange={handleRatingChange}
                aria-label="No rating."
              />
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <React.Fragment key={ratingValue}>
                  <input
                    type="radio"
                    id={`rating-${name}-${ratingValue}`}
                    name={`review-${name}[rating]`}
                    value={ratingValue}
                    checked={rating === ratingValue}
                    onChange={handleRatingChange}
                  />
                  <label
                    htmlFor={`rating-${name}-${ratingValue}`}
                    title={getRatingTitle(ratingValue)}
                    className="star-label"
                  >
                    {ratingValue} star{ratingValue !== 1 ? "s" : ""}
                  </label>
                </React.Fragment>
              ))}
            </fieldset>
          </div>
        </li>
      </ul>
    </div>
  );
};

// Helper function to get rating titles
const getRatingTitle = (rating) => {
  const titles = ["Terrible", "Not good", "Average", "Very good", "Amazing"];
  return titles[rating - 1];
};

export default Cart;
