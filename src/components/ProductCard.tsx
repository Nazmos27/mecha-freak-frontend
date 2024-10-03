import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { TProduct } from "../redux/api/productsApi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { availableQuantity, title, brand, price, ratings, _id, image } =
    product;
  console.log("image", image);
  return (
    <Card sx={{ maxWidth: 345, paddingTop: 3 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Product Image" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {brand}
        </Typography>
        <div className="flex justify-between">
          <Typography gutterBottom variant="body2" component="div">
            Price : ${price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Quantity: {availableQuantity}
          </Typography>
        </div>
        <Rating style={{ maxWidth: 100 }} value={ratings} />
      </CardContent>
      <CardActions className="flex justify-center" sx={{ width: "100%" }}>
        <Link to={`/products/details/${_id}`} style={{ width: "100%" }}>
          {" "}
          <Button size="small" variant="contained" fullWidth>
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

// https://i.ibb.co.com/8XrpDGt/zoomTkl.jpg
// https://i.ibb.co.com/LhggHFk/zoom-Keyboard.webp
// https://i.ibb.co.com/kXZBbBB/zoom75.webp
// https://i.ibb.co.com/GpXLmjB/meletrix-Zoom75.webp
// https://i.ibb.co.com/Cz54PcP/rk71v2.jpg
// https://i.ibb.co.com/7JpyQQN/rk71.webp
// https://i.ibb.co.com/6szvWt4/eyooso-Z686.jpg
