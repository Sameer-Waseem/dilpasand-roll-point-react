import { CircularProgress } from "@mui/material";
import useProducts from "../hooks/useProducts";

const Content = () => {
  const { products, error, isLoading } = useProducts();

  if (isLoading) return <CircularProgress />;

  if (error) return error;

  return products.map((product) => (
    <div style={{ backgroundColor: "green", border: "5px solid black" }}>
      {product.name}
    </div>
  ));
};

export default Content;
