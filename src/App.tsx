import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState<string | null>(null);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Hidden smDown>
        <Grid item sm={3} md={2}>
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={9} md={10}>
        <Content
          selectedCategory={selectedCategory}
          selectedOrderBy={selectedOrderBy}
          onSelectOrderBy={setSelectedOrderBy}
          onSelectCategory={setSelectedCategory}
        />
      </Grid>
    </Grid>
  );
}

export default App;
