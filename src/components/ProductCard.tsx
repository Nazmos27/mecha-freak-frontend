import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { TProduct } from "../redux/api/productsApi";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { availableQuantity, title, brand, price, ratings, _id, image } =
    product;
  return (
    <div className="">
      <div className="group relative items-center justify-center overflow-hidden cursor-pointer shadow rounded-md">
        <div className="">
          <LazyLoadImage
            alt={"Product Image"}
            src={image}
            width="100%"
            height="100%"
            style={{ transitionProperty: "all", transitionDuration: "700ms" }}
            className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000d35f5] group-hover:from-[#000435c5] group-hover:via-[#000935d2] group-hover:to-[#000235db]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] md:translate-y-[45%] group-hover:translate-y-0 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white group-hover:py-0">
            {title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-start mt-5">
            <p className="text-xl font-semibold text-white">{brand} band</p>

            <p className="rounded-full text-xl text-white">Price: {price}</p>
            <p className="rounded-full text-xl text-white">
              Available Quantity: {availableQuantity}
            </p>
            <div className="font-bold text-orange-100">
              <Rating
                style={{ maxWidth: 150 }}
                value={ratings ? ratings : 4.5}
                readOnly
              />
            </div>
            <Link to={`/products/details/${_id}`}>
              {" "}
              <button className="btn myPrimaryBtn mt-6">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
