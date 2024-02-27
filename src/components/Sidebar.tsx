import { CircularProgress } from "@mui/material";
import useCategories from "../hooks/useCategories";

const Sidebar = () => {
  const { categories, error, isLoading } = useCategories();

  if (error) return error;

  if (isLoading) return <CircularProgress />;

  return categories.map((category, index) => <p>{category.name}</p>);
};

export default Sidebar;
