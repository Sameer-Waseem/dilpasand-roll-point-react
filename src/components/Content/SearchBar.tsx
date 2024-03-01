import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useState } from "react";

interface Props {
  onSearch: (value: string | null) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <Grid container sm={8} padding={{ xs: "8px", sm: "8px 12px 8px 8px" }}>
      <FormControl variant={"outlined"} fullWidth>
        <OutlinedInput
          id={"search-products"}
          placeholder={"Search Products"}
          value={inputValue}
          onChange={handleInputChange}
          startAdornment={
            <InputAdornment position={"start"}>
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position={"end"}>
              <IconButton onClick={handleSearch}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  );
};

export default SearchBar;
