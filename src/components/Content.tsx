import { CircularProgress, Grid } from "@mui/material";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const Content = () => {
  const { products, error, isLoading } = useProducts();

  if (error) return error;

  if (isLoading) return <CircularProgress />;

  return (
    <Grid container padding={"10px"}>
      {products.map((product, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
