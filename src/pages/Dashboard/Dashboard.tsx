import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/api/productsApi";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/shared/SectionHeader";
const Dashboard: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data;
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product deleted");
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>Key Haven | Dashboard</title>
      </Helmet>
      <Container>
        <div className="flex flex-col justify-between min-h-[calc(100vh-100px)]">
          <div>
            {products?.length ? (
              <div className="overflow-x-auto">
                <SectionHeader
                  title={`Total Products: ${products.length}`}
                  description=" "
                />
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-end">Price</th>
                      <th className="">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <Link
                            to={`/products/details/${item._id}`}
                            className="flex items-center gap-3"
                          >
                            <div className="avatar">
                              <div className="rounded-md h-28 w-24">
                                <img src={item.image} alt="Product image" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.title}</div>
                              <div className="text-sm opacity-50">
                                {item.brand}
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="text-end text-xl font-bold text-blue-500">
                          {item.price} $
                        </td>

                        <td>
                          <div className="flex items-center">
                            <Link to={`/dashboard/update-product/${item._id}`}>
                              <FaEdit className="text-2xl text-blue-500" />
                            </Link>

                            <button onClick={() => handleDelete(item._id)}>
                              <MdDelete className="text-red-600 text-3xl" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // if no cart product available
              <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <h1 className="text-4xl text-blue-500 font-bold text-center">
                    No products available
                  </h1>
                  <Link
                    to="/dashboard/add-products"
                    className="btn myPrimaryBtn mx-auto"
                  >
                    Add Products
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/dashboard/add-product"
            className="btn btn-block myPrimaryBtn"
          >
            Add a Product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
