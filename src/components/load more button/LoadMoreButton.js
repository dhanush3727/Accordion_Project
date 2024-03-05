import React, { useEffect, useState } from "react";
import "./Product.css";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const result = await response.json();
        console.log(result);
        if (result && result.products && result.products.length) {
          setProducts((prevData) => [...prevData, ...result.products]);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(true);
      }
    };
    fetchProduct();
  }, [count]);
  if (loading) {
    return <div>Loading data! Please Wait</div>;
  }
  return (
    <div className="pro-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img
                  className="product-img"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button onClick={() => setCount(count + 1)}>Load More Product</button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
