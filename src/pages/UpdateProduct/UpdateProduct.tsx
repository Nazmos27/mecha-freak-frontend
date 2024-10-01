import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/api/productsApi";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading("Creating product");

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
    <div className="my-12">
      <form
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
      </form>
    </div>
  );
};

export default UpdateProduct;
