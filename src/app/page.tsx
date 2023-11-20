"use client";

import { CartProvider } from "@/Contexts/CartContext";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductsCards } from "./components/ProductsCards/ProductsCards";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <ProductsCards />
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}
