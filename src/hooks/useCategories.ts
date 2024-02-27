import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Category {
  _id: string;
  name: string;
}

interface FetchCategoryResponse {
  categories: Category[];
}

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const configuration = { signal: controller.signal };

    setLoading(true);

    apiClient
      .get<FetchCategoryResponse>("/category", configuration)
      .then((res) => setCategories(res.data.categories))
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

  return { categories, error, isLoading };
};

export default useCategories;
