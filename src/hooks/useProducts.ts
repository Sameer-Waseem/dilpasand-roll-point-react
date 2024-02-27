import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Product {
  _id: string;
  category_id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
}

interface FetchProductsResponse {
  products: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const configuration = {
      signal: controller.signal,
    };

    setLoading(true);

    apiClient
      .get<FetchProductsResponse>("/product", configuration)
      .then((res) => setProducts(res.data.products))
      .catch((error) => {
        if (error?.name === "CanceledError") {
          return;
        }

        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { products, error, isLoading };
};

export default useProducts;
