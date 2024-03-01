import { Grid } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  search: string | null;
  selectedCategory: string | null;
  selectedOrderBy: string | null;
}

const MainContent = ({ search, selectedCategory, selectedOrderBy }: Props) => {
  const { products, error, isLoading } = useProducts(
    search,
    selectedCategory,
    selectedOrderBy
  );
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
