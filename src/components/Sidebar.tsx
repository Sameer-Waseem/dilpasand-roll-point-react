import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useCategories from "../hooks/useCategories";

interface Props {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const Sidebar = ({ selectedCategory, onSelectCategory }: Props) => {
  const { categories, error, isLoading } = useCategories();

  if (error) return error;

  return (
    <List>
      {isLoading && <CircularProgress />}

      {categories.map((category, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            selected={selectedCategory === category._id}
            onClick={() => onSelectCategory(category._id)}
          >
            <ListItemText primary={category.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
