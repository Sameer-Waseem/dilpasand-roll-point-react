import { Grid } from "@mui/material";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import OrberBy from "./OrberBy";
import SearchBar from "./SearchBar";
import { ResetFilters } from "./ResetFilters";

interface Props {
  selectedCategory: string | null;
  selectedOrderBy: string | null;
  onSelectOrderBy: (value: string | null) => void;
  onSelectCategory: (categoryId: string | null) => void;
}

const Content = ({
  selectedCategory,
  selectedOrderBy,
  onSelectOrderBy,
  onSelectCategory,
}: Props) => {
  const { products, error, isLoading } = useProducts(
    selectedCategory,
    selectedOrderBy
  );
  const skeletonsCount = [1, 2, 3, 4, 5, 6];

  if (error) return error;

  return (
    <Grid container padding={"40px 10px 10px 10px"}>
      <Grid container item sm={8} padding={"8px"}>
        <SearchBar />
      </Grid>

      <Grid container item sm={4} padding={"8px"}>
        <OrberBy onSelectOrderBy={onSelectOrderBy} />
      </Grid>

      {(selectedCategory || selectedOrderBy) && (
        <Grid container item sm={12} padding={"8px"}>
          <ResetFilters
            onSelectCategory={onSelectCategory}
            onSelectOrderBy={onSelectOrderBy}
          />
        </Grid>
      )}

      <Grid container item sm={12}>
        {isLoading &&
          skeletonsCount.map((skeleton) => (
            <Grid key={skeleton} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <ProductCardSkeleton key={skeleton} />
            </Grid>
          ))}

        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Content;
