import { Grid, Hidden } from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/Content/MainContent";
import { useState } from "react";
import ContentHeader from "./components/Content/ContentHeader";

export interface ProductQuery {
  category: string | null;
  orderBy: string | null;
  search: string | null;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Hidden smDown>
        <Grid item sm={3} md={2}>
          <Sidebar
            selectedCategory={productQuery.category}
            onSelectCategory={(categoryId) =>
              setProductQuery({ ...productQuery, category: categoryId })
            }
          />
        </Grid>
      </Hidden>

      <Grid item xs={12} sm={9} md={10}>
        <ContentHeader
          onSearch={(search) => setProductQuery({ ...productQuery, search })}
          onSelectOrderBy={(orderBy) =>
            setProductQuery({ ...productQuery, orderBy })
          }
        />

        <MainContent productQuery={productQuery} />
      </Grid>
    </Grid>
  );
}

export default App;
