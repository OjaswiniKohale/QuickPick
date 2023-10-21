import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Product = ({ currentCart, makeCart }) => {
  const { state } = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/v1/getToken");

      if (response.data.message === "Token exists") {
        const productObject = await axios.get("/api/v1/products", {
          params: {
            category: state.category,
          },
        });

        if (productObject.data.products) {
          setProducts(productObject.data.products);
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Page</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.product_id}>
            <Cart
              price={product.price}
              name={product.name}
              img={product.image_url}
              makeCart={makeCart}
              currentCart={currentCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
