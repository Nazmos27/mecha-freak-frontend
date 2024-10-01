import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/productsApi";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import { Rating } from "@smastrom/react-rating";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart, TCartItem } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetSingleProductQuery(id as string);

  if (isLoading) {
    return <Loading />;
  }
  const {
    availableQuantity,
    brand,
    description,
    image,
    price,
    title,
    ratings,
  } = data!.data;

  const handleAddToCart = () => {
    const { _id, title, price, brand, image } = data!.data;
    // Assuming you have logic to calculate subtotal based on quantity
    const quantity = 1; // Example: Initially adding 1 unit

    const newItem: TCartItem = {
      productId: _id,
      productTitle: title,
      brand,
      image,
      quantity,
      price,
      subTotal: price * quantity,
    };

    dispatch(addToCart(newItem));
    const toastId = toast.loading("Adding product");
    toast.success("Product added to the cart", {
      id: toastId,
      duration: 1000,
    });
  };
  return (
    <div>
      {/* toast */}

      <Helmet>
        <title>Key Haven | Details</title>
      </Helmet>

      <Container>
        <div className="flex gap-4 flex-col md:flex-row my-12">
          <div className="md:w-1/2 w-full">
            {/* Replace placeholder Image url */}
            <img className="w-full" src={image} alt="productImg" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <h1 className="text-xl">{brand}</h1>
              <h1 className="text-xl font-bold text-blue-800">
                Price: {price}$
              </h1>
              <h1 className="text-xl">
                Available quantity: {availableQuantity}
              </h1>{" "}
              <Rating
                style={{ maxWidth: 150 }}
                value={ratings ? ratings : 4.5}
                readOnly
              />
            </div>
            <div>
              <p className="my-6">
                <b>Description: </b>
                {description}
              </p>
              <button
                onClick={() => handleAddToCart()}
                className="btn btn-block myPrimaryBtn"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
