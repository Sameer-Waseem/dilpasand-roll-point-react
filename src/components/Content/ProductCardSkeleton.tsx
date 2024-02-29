import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card sx={{ margin: "8px" }}>
      <Skeleton variant={"rectangular"} height={220} />

      <CardContent>
        <Skeleton />
      </CardContent>

      <CardActions>
        <Skeleton width={"60%"} />
      </CardActions>
    </Card>
  );
};

export default ProductCardSkeleton;
