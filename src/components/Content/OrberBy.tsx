import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ORDER_BY } from "./constant";

interface Props {
  onSelectOrderBy: (value: string) => void;
}

const OrberBy = ({ onSelectOrderBy }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={"product-order-by-label"}>Order By</InputLabel>

      <Select
        id={"product-order-by"}
        labelId={"product-order-by-label"}
        label={"Order By"}
        onChange={(e) => onSelectOrderBy(e.target.value as string)}
      >
        {ORDER_BY.map((orderBy, index) => (
          <MenuItem key={index} value={orderBy.value}>
            {orderBy.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OrberBy;
