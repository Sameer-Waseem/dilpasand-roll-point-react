import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Hidden smDown>
        <Grid item sm={3}>
          <Sidebar />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={9}>
        <Main />
      </Grid>
    </Grid>
  );
}

export default App;
