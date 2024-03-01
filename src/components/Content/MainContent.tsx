import { Grid, Typography } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ProductQuery } from "../../App";

interface Props {
  productQuery: ProductQuery;
}

const MainContent = ({ productQuery }: Props) => {
  const { products, error, isLoading } = useProducts(productQuery);
  const skeletonsCount = [1, 2, 3, 4, 5, 6];

  if (error) return error;

  return (
    <Grid container sm={12} padding={"10px"}>
      {isLoading &&
        skeletonsCount.map((skeleton) => (
          <Grid key={skeleton} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <ProductCardSkeleton key={skeleton} />
          </Grid>
        ))}

      {!isLoading && !products.length ? (
        <Typography variant={"h5"} padding={"10px"}>
          No Products found!
        </Typography>
      ) : null}

      {!isLoading &&
        products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default MainContent;
