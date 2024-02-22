import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

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
        <Content />
      </Grid>
    </Grid>
  );
}

export default App;
