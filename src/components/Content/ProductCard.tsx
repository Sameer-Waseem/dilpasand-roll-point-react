import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../hooks/useProducts";
import useImages from "../../hooks/useImages";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const image = useImages(product.category);

  return (
    <Card sx={{ margin: "8px" }}>
      <CardActionArea>
        <CardMedia sx={{ height: 220 }} image={image} title={product.name} />

        <CardContent>
          <Typography variant={"h6"}>{product.name}</Typography>
          <Typography variant={"caption"}>{product.price} Rupees</Typography>
        </CardContent>

        <CardActions sx={{ padding: "8px 16px" }}>
          <Typography variant={"caption"}>Rating: {product.rating}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
