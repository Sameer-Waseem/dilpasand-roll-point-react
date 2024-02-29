import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";

interface Props {
  onSelectOrderBy: (value: string | null) => void;
  onSelectCategory: (categoryId: string | null) => void;
}

export const ResetFilters = ({ onSelectOrderBy, onSelectCategory }: Props) => {
  const handleReset = () => {
    onSelectCategory(null);
    onSelectOrderBy(null);
  };

  return (
    <Button
      variant={"outlined"}
      endIcon={<CancelIcon />}
      onClick={handleReset}
      sx={{ borderRadius: "20px" }}
    >
      Reset Filters
    </Button>
  );
};
