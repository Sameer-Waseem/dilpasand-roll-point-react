import Grid from "@mui/material/Grid";
import SearchBar from "./SearchBar";
import OrderBy from "./OrderBy";

interface Props {
  onSearch: (value: string | null) => void;
  onSelectOrderBy: (value: string | null) => void;
}

const ContentHeader = ({ onSearch, onSelectOrderBy }: Props) => {
  return (
    <Grid container padding={"40px 10px 10px 10px"}>
      <SearchBar onSearch={onSearch} />

      <OrderBy onSelectOrderBy={onSelectOrderBy} />
    </Grid>
  );
};

export default ContentHeader;
