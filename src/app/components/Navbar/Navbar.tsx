import React, { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import Modal from "react-modal";
import { useCart } from "../../../Contexts/CartContext";

export const Navbar = () => {
  const { cartItems, handleQuantityChange } = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-title">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>

      <div className="btn-cart">
        <button onClick={handleOpenModal}>
          <Image
            src="/cart.png"
            alt="cart"
            width={20}
            height={20}
            className="cart-icon"
          />

          <span className="cart-count">{cartItems.length}</span>
        </button>
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className="cart-modal"
        overlayClassName="cart-modal-overlay"
      >
        <div className="modal-container">
          <div className="modal-header">
            <h1>
              Carrinho <br /> de compras
            </h1>
            <button onClick={closeModal}>X</button>
          </div>

          <div className="products-box">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-product">
                <Image
                  src={item.photo}
                  alt="product-logo"
                  width={50}
                  height={50}
                />
                <p>{item.name}</p>
                <div className="quantity-controls">
                  <span className="quantity-label">Qtd:</span>
                  <div className="control">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <div className="quantity-divider"></div>
                    <span>{item.quantity}</span>
                    <div className="quantity-divider"></div>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <p>{`R$${item.price}`}</p>
              </div>
            ))}
          </div>

          <div className="footer-modal">
            <div className="total-products">
              <h1>Total:</h1>
              <h1>{`R$${calculateTotal()}`}</h1>
            </div>
            <button>Finalizar Compra</button>
          </div>
        </div>
      </Modal>
    </header>
  );
};
