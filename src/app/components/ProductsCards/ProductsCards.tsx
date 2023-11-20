import React, { useState } from "react";
import "./ProductsCards.scss";
import Image from "next/image";
import useProducts from "../../../../Hooks/useProducts";
import { motion } from "framer-motion";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import LoadingProductsError from "../LoadingProductsError/LoadingProductsError";
import { useCart } from "../../../Contexts/CartContext";

export const ProductsCards: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();
  const { addToCart } = useCart();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError || !products || !Array.isArray(products)) {
    console.error("Erro ou produtos indefinidos:", isError, products);
    return <LoadingProductsError />;
  }
  return (
    <main>
      <div className="products-container">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.05 }}
            className="product"
          >
            <Image
              src={product.photo}
              alt={product.name}
              width={110}
              height={135}
              className="product-img"
            />

            <div className="details">
              <h2>
                {product.brand} <span /> {product.name}
              </h2>
              <p>{`R$${product.price}`}</p>
            </div>

            <p className="description">{product.description}</p>

            <button onClick={() => addToCart(product)}>
              <Image src="/shopping-bag.png" alt="bag" width={15} height={15} />
              COMPRAR
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
};
