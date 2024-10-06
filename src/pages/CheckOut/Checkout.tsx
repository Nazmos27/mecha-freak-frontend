import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  cart,
  emptyCart,
  totalCartItems,
} from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { TOrder, useCreateOrderMutation } from "../../redux/api/orderApi";
import { TextField, Button, Grid } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TOrder>();
  const [createOrder, { error }] = useCreateOrderMutation();
  const cartItems = useAppSelector(cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TOrder> = async (data) => {
    const orderData = {
      ...data,
      orderStatus: "unpaid",
      orderInfo: cartItems.items.map((item) => ({
        product: item.productId,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    const result = await createOrder(orderData).unwrap();
    if (result.success) {
      toast.success("Order placed successfully");
      dispatch(emptyCart());
      navigate("/");
    } else {
      toast.error(result.message);
    }
    if (error) {
      toast.error(result.message);
    }
  };

  const getTotalCartItems = useAppSelector(totalCartItems);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (getTotalCartItems > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. If you reload the page, your cart will be emptied.";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems, getTotalCartItems]);

  const key = import.meta.env.VITE_STRIPE_SECRET_KEY;
  console.log(key);
  const stripePromise = loadStripe(key);

  const makePayment = async () => {
    try {
      const stripe = await stripePromise; // Wait until Stripe.js has loaded

      const body = {
        products: cartItems, // Assuming 'cart' is defined elsewhere with product data
      };

      const headers = {
        "Content-Type": "application/json", // Corrected the typo here
      };

      // Fetch the checkout session from your server
      const response = await fetch(
        `https://mecha-freak-server.vercel.app/api/v1/payment/create-checkout-session`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();

      // Redirect to checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        console.error("Error redirecting to checkout:", result.error.message);
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>

          {/* Phone Field */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>

          {/* Total Price Field */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="totalPrice"
              control={control}
              rules={{ required: "Total Price is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Total Price"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={cartItems.totalPrice}
                  error={!!errors.totalPrice}
                  helperText={errors.totalPrice?.message}
                />
              )}
            />
          </Grid>

          {/* Delivery Address Field */}
          <Grid item xs={12}>
            <Controller
              name="deliveryAddress"
              control={control}
              rules={{ required: "Delivery Address is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Delivery Address"
                  variant="outlined"
                  fullWidth
                  error={!!errors.deliveryAddress}
                  helperText={errors.deliveryAddress?.message}
                />
              )}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={makePayment}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CheckoutForm;
