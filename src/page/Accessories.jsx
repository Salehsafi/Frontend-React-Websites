import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Accessories.css';

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching accessories category products from dummyjson
    const fetchAccessories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/mens-watches');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accessories:", error);
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div className="accessories_page">
      <div className="container">
        <h1>Accessories</h1>
        <p className="subtitle">Elevate your style with our curated collection of accessories.</p>
        
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="products_grid">
            {products.map((product) => (
              <div key={product.id} className="product_card">
                <div className="img_box">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product_info">
                  <h3>{product.title}</h3>
                  <p className="price">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="view_detail">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
