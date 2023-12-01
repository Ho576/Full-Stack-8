import React from 'react'
import ProductCard from './ProductCard';

export default function Product({products,addToCart}) {
  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            saleBadge={product.saleBadge}
            rating={product.rating}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            addToCart={addToCart}
            option={product.option}
          />
        ))}
      </div>
    </div>
  </section>

  )
}
