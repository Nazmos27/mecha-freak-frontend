import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  cart,
  decreaseQuantityFromCart,
  deleteProductFromCart,
  increaseQuantityToCart,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import SectionHeader from "../../components/shared/SectionHeader";

const Cart: React.FC = () => {
  const cartItems = useAppSelector(cart);
  const dispatch = useAppDispatch();

  const deleteCart = (productId: string) => {
    dispatch(deleteProductFromCart(productId));
    toast.success("Product deleted");
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantityToCart(productId));
  };
  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQuantityFromCart(productId));
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>Mecha Freak | Cart</title>
      </Helmet>
      <Container>
        <div>
          {cartItems.items.length ? (
            <div className="overflow-x-auto">
              <SectionHeader
                title={`Total cart Items ${cartItems.items.length}`}
                description=" "
              />
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-end">Price</th>
                    <th className="">Quantity</th>
                    <th className="text-end">Subtotal</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.items.map((item) => (
                    <tr key={item.productId}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="rounded-md h-28 w-24">
                              <img src={item.image} alt="Product image" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.productTitle}</div>
                            <div className="text-sm opacity-50">
                              {item.brand}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end text-xl font-bold text-blue-500">
                        {item.price} $
                      </td>
                      <td className="">
                        <button
                          onClick={() => handleDecreaseQuantity(item.productId)}
                          className="btn btn-sm myOutlineBtn mr-2 font-bold text-xl"
                        >
                          -
                        </button>
                        <span className="text-xl font-bold">
                          {" "}
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.productId)}
                          className="btn btn-sm ml-2 myOutlineBtn font-bold text-xl"
                        >
                          +
                        </button>
                      </td>
                      <td className="text-end text-xl font-bold text-blue-500">
                        {item.subTotal} $
                      </td>
                      <td className="text-end text-xl font-bold text-blue-500">
                        <button
                          onClick={() => deleteCart(item.productId)}
                          className="btn btn-sm myPrimaryBtn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-end my-2">
                <h2 className="text-xl font-bold">
                  Total Quantity:{" "}
                  <span className="text-red-500">
                    {cartItems.totalQuantity}
                  </span>
                </h2>
                <h2 className="text-xl font-bold my-2">
                  Total Price:{" "}
                  <span className="text-red-500">{cartItems.totalPrice} $</span>
                </h2>
                <Link to="/checkout" className="btn myPrimaryBtn">
                  Checkout
                </Link>
              </div>
            </div>
          ) : (
            // if no cart product available
            <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-4xl text-blue-500 font-bold text-center">
                  No Cart products available
                </h1>
                <Link to="/products" className="btn myPrimaryBtn mx-auto">
                  Browse Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
