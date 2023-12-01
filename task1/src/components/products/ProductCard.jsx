// ProductCard.jsx
import React from 'react';

const ProductCard = ({ imageUrl, title, price, saleBadge, rating, originalPrice, discountedPrice, addToCart,option }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {saleBadge && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>{saleBadge}</div>}
        <img className="card-img-top" src={imageUrl} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            {rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(rating)].map((index) => (
                  <div key={index} className="bi-star-fill" />
                ))}
              </div>
            )}
            {originalPrice && <span className="text-muted text-decoration-line-through">{originalPrice}</span>}
            {discountedPrice ? discountedPrice : price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={option == 'Add to cart'? addToCart : console.log('view')}>{option}</a></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
