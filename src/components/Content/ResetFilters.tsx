import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

interface Props {
  onSearch: (value: string | null) => void;
  onSelectOrderBy: (value: string | null) => void;
  onSelectCategory: (categoryId: string | null) => void;
}

export const ResetFilters = ({
  onSearch,
  onSelectOrderBy,
  onSelectCategory,
}: Props) => {
  const handleReset = () => {
    onSearch(null);
    onSelectCategory(null);
    onSelectOrderBy(null);
  };

  return (
    <Grid container sm={12} padding={"8px"}>
      <Button
        variant={"outlined"}
        endIcon={<CancelIcon />}
        onClick={handleReset}
        sx={{ borderRadius: "20px" }}
      >
        Reset Filters
      </Button>
    </Grid>
  );
};
