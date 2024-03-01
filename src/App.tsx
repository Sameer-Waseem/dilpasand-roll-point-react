import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/Content/MainContent";
import { useState } from "react";
import ContentHeader from "./components/Content/ContentHeader";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState<string | null>(null);
  const [search, setSeacrh] = useState<string | null>(null);

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
        <ContentHeader
          search={search}
          selectedOrderBy={selectedOrderBy}
          selectedCategory={selectedCategory}
          onSearch={setSeacrh}
          onSelectOrderBy={setSelectedOrderBy}
          onSelectCategory={setSelectedCategory}
        />

        <MainContent
          search={search}
          selectedCategory={selectedCategory}
          selectedOrderBy={selectedOrderBy}
        />
      </Grid>
    </Grid>
  );
}

export default App;
