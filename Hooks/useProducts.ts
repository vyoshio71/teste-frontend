// hooks/useProducts.ts
import { useQuery } from "react-query";
import api from "../services/api";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ApiResponse {
  products: Product[];
}

const fetchProducts = async () => {
  try {
    const response = await api.get<ApiResponse>(
      "/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );
    return response.data.products;
  } catch (error) {
    throw new Error("Erro ao obter os produtos");
  }
};

const useProducts = () => {
  return useQuery<Product[]>("products", fetchProducts);
};

export default useProducts;
