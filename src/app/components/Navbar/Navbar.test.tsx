import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "./Navbar";
import { CartProvider } from "@/Contexts/CartContext";
jest.mock("./Navbar.scss", () => ({}));

test("Renderiza o componente Navbar corretamente", () => {
  render(
    <CartProvider>
      <Navbar />
    </CartProvider>
  );
  expect(screen.getByText("MKS")).toBeInTheDocument();
  expect(screen.getByText("Sistemas")).toBeInTheDocument();
});

test("Abre o modal ao clicar no botão do carrinho", () => {
  render(
    <CartProvider>
      <Navbar />
    </CartProvider>
  );
  fireEvent.click(screen.getByAltText("cart"));
  expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
});

test("Fecha o modal ao clicar no botão de fechar", () => {
  render(
    <CartProvider>
      <Navbar />
    </CartProvider>
  );
  fireEvent.click(screen.getByAltText("cart"));
  fireEvent.click(screen.getByText("X"));
  expect(screen.queryByText("Carrinho de compras")).toBeNull();
});

test("Exibe corretamente a contagem de itens no carrinho", () => {
  render(
    <CartProvider>
      <Navbar />
    </CartProvider>
  );
  expect(screen.getByText("0")).toBeInTheDocument();
});
