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
import { TextField, Button, Grid } from '@mui/material';
import {loadStripe} from '@stripe/stripe-js'

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



  //payment process

  const makePayment = () => {
    const stripe = loadStripe('')
  }



  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </label>
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Phone
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </label>
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </label>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Total Price
            <input
              type="number"
              {...register("totalPrice", {
                required: "Total Price is required",
                valueAsNumber: true,
              })}
              value={cartItems.totalPrice}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.totalPrice && (
              <p className="text-red-500 text-sm">
                {errors.totalPrice.message}
              </p>
            )}
          </label>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Delivery Address
            <input
              type="text"
              {...register("deliveryAddress", {
                required: "Delivery Address is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.deliveryAddress && (
              <p className="text-red-500 text-sm">
                {errors.deliveryAddress.message}
              </p>
            )}
          </label>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Place Order
          </button>
        </div>
      </form> */}
       <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
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
            rules={{ required: 'Phone is required' }}
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
            rules={{ required: 'Email is required' }}
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
            rules={{ required: 'Total Price is required' }}
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
            rules={{ required: 'Delivery Address is required' }}
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
