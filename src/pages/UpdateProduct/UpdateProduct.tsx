import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/api/productsApi";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Grid } from '@mui/material';
import {  Controller } from 'react-hook-form';
import SectionHeader from "../../components/shared/SectionHeader";



type FormValues = {
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  ratings: number;
  description: string;
  image: string;
};

const UpdateProduct: React.FC = () => {
  const { id } = useParams();
  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetSingleProductQuery(id as string);

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: data?.data.title || '',
      brand: data?.data.brand || '',
      availableQuantity: data?.data.availableQuantity || 0,
      price: data?.data.price || 0,
      ratings: data?.data.ratings || 0,
      image: data?.data.image || '',
      description: data?.data.description || '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading("Updating product");

    data.price = Number(data.price);
    data.availableQuantity = Number(data.availableQuantity);
    data.ratings = Number(data.ratings);

    const productInfo = {
      _id: id,
      product: data,
    };
    try {
      const result = await updateProduct(productInfo).unwrap();
      if (result.success) {
        toast.success(result.message, {
          id: toastId,
          duration: 2000,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="my-20">
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-6 shadow-lg rounded-md bg-white"
      >
        <h2 className="text-2xl font-bold mb-6">Update a Product</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              {...register("title", { required: "Title is required" })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.title}
            />
            {errors.title && (
              <p className="text-red-500 text-xs">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              id="brand"
              {...register("brand", { required: "Brand is required" })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.brand}
            />
            {errors.brand && (
              <p className="text-red-500 text-xs">{errors.brand.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="availableQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Available Quantity
            </label>
            <input
              type="text"
              id="availableQuantity"
              {...register("availableQuantity", {
                required: "Available Quantity is required",
              })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.availableQuantity}
            />
            {errors.availableQuantity && (
              <p className="text-red-500 text-xs">
                {errors.availableQuantity.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              {...register("price", { required: "Price is required" })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.price}
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="ratings"
              className="block text-sm font-medium text-gray-700"
            >
              Ratings
            </label>
            <input
              type="text"
              step="0.1"
              id="ratings"
              {...register("ratings", {
                required: "Ratings are required",
                min: { value: 0, message: "Minimum rating is 0" },
                max: { value: 5, message: "Maximum rating is 5" },
              })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.ratings}
            />
            {errors.ratings && (
              <p className="text-red-500 text-xs">{errors.ratings.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              {...register("image", { required: "Image URL is required" })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.image}
            />
            {errors.image && (
              <p className="text-red-500 text-xs">{errors.image.message}</p>
            )}
          </div>

          <div className="lg:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              defaultValue={data?.data.description}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-700"
        >
          Update Product
        </button>
      </form> */}
      <SectionHeader title="Update this product" description="Carefully update every field"></SectionHeader>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-6 shadow-lg rounded-md bg-white"
    >
      
      <Grid container spacing={2}>
        {/* Title */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
        </Grid>

        {/* Brand */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="brand"
            control={control}
            rules={{ required: 'Brand is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Brand"
                variant="outlined"
                fullWidth
                error={!!errors.brand}
                helperText={errors.brand?.message}
              />
            )}
          />
        </Grid>

        {/* Available Quantity */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="availableQuantity"
            control={control}
            rules={{ required: 'Available Quantity is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Available Quantity"
                variant="outlined"
                fullWidth
                error={!!errors.availableQuantity}
                helperText={errors.availableQuantity?.message}
              />
            )}
          />
        </Grid>

        {/* Price */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="price"
            control={control}
            rules={{ required: 'Price is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Price"
                variant="outlined"
                fullWidth
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            )}
          />
        </Grid>

        {/* Ratings */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="ratings"
            control={control}
            rules={{
              required: 'Ratings are required',
              min: { value: 0, message: 'Minimum rating is 0' },
              max: { value: 5, message: 'Maximum rating is 5' },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ratings"
                variant="outlined"
                fullWidth
                error={!!errors.ratings}
                helperText={errors.ratings?.message}
              />
            )}
          />
        </Grid>

        {/* Image URL */}
        <Grid item xs={12} sm={6}>
          <Controller
            name="image"
            control={control}
            rules={{ required: 'Image URL is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                fullWidth
                error={!!errors.image}
                helperText={errors.image?.message}
              />
            )}
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="mt-6"
      >
        Update Product
      </Button>
    </form>
    </div>
  );
};

export default UpdateProduct;
