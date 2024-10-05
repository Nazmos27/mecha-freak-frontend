import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { totalCartItems } from "../redux/features/cart/cartSlice";

const ReloadWarning: React.FC = () => {
  const cartItems = useAppSelector(totalCartItems);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems > 0) {
        event.preventDefault();
        event.returnValue =
          "You have added products to cart. If you reload the page your cart will be empty";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return null;
};

export default ReloadWarning;
