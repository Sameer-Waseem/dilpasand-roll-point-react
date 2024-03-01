import Grid from "@mui/material/Grid";
import SearchBar from "./SearchBar";
import OrderBy from "./OrderBy";
import { ResetFilters } from "./ResetFilters";

interface Props {
  search: string | null;
  selectedCategory: string | null;
  selectedOrderBy: string | null;
  onSearch: (value: string | null) => void;
  onSelectOrderBy: (value: string | null) => void;
  onSelectCategory: (categoryId: string | null) => void;
}

const ContentHeader = ({
  search,
  selectedCategory,
  selectedOrderBy,
  onSearch,
  onSelectOrderBy,
  onSelectCategory,
}: Props) => {
  return (
    <Grid container padding={"40px 10px 10px 10px"}>
      <SearchBar onSearch={onSearch} />

      <OrderBy onSelectOrderBy={onSelectOrderBy} />

      {(search || selectedCategory || selectedOrderBy) && (
        <ResetFilters
          onSearch={onSearch}
          onSelectCategory={onSelectCategory}
          onSelectOrderBy={onSelectOrderBy}
        />
      )}
    </Grid>
  );
};

export default ContentHeader;
