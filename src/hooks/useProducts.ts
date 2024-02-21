import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Product {
  _id: string;
  name: string;
  price: number;
  rating: number;
}

interface FetchProductsResponse {
  products: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<FetchProductsResponse>("/product")
      .then((res) => setProducts(res.data.products))
      .catch((error) => setError(error.message));
  }, []);

  return { products, error };
};

export default useProducts;
