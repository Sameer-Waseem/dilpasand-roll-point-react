import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Hidden smDown>
        <Grid item sm={3}>
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={9}>
        <Content selectedCategory={selectedCategory} />
      </Grid>
    </Grid>
  );
}

export default App;
