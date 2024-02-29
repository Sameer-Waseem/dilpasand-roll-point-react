import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <AppBar position={"static"} sx={{ backgroundColor: "#edce77" }}>
        <Toolbar>
          <img src={"/chilly-pepper.jpg"} width={"32px"} height={"32px"} />

          <Typography
            color={"black"}
            marginLeft={"12px"}
            variant={isMobile ? "h6" : "h5"}
          >
            Dilpasand Roll Point
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
