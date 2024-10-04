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
// const Dashboard: React.FC = () => {
//   const { data, isLoading } = useGetAllProductsQuery({});
//   const products = data?.data;
//   const [deleteProduct] = useDeleteProductMutation();

//   if (isLoading) {
//     return <Loading />;
//   }
//   const handleDelete = (id: string) => {
//     deleteProduct(id);
//     toast.success("Product deleted");
//   };

//   return (
//     <div className="my-12">
//       <Helmet>
//         <title>Mecha Freak | Dashboard</title>
//       </Helmet>
//       <Container>
//         <div className="flex flex-col justify-between min-h-[calc(100vh-100px)]">
//           <div>
//             {products?.length ? (
//               <div className="overflow-x-auto">
//                 <SectionHeader
//                   title={`Total Products: ${products.length}`}
//                   description=" "
//                 />
//                 <table className="table">
//                   {/* head */}
//                   <thead>
//                     <tr>
//                       <th>Product</th>
//                       <th className="text-end">Price</th>
//                       <th className="">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {products.map((item) => (
//                       <tr key={item._id}>
//                         <td>
//                           <Link
//                             to={`/products/details/${item._id}`}
//                             className="flex items-center gap-3"
//                           >
//                             <div className="avatar">
//                               <div className="rounded-md h-28 w-24">
//                                 <img src={item.image} alt="Product image" />
//                               </div>
//                             </div>
//                             <div>
//                               <div className="font-bold">{item.title}</div>
//                               <div className="text-sm opacity-50">
//                                 {item.brand}
//                               </div>
//                             </div>
//                           </Link>
//                         </td>
//                         <td className="text-end text-xl font-bold text-blue-500">
//                           {item.price} $
//                         </td>

//                         <td>
//                           <div className="flex items-center">
//                             <Link to={`/dashboard/update-product/${item._id}`}>
//                               <FaEdit className="text-2xl text-blue-500" />
//                             </Link>

//                             <button onClick={() => handleDelete(item._id)}>
//                               <MdDelete className="text-red-600 text-3xl" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               // if no cart product available
//               <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center">
//                 <div className="flex flex-col gap-4 items-center justify-center">
//                   <h1 className="text-4xl text-blue-500 font-bold text-center">
//                     No products available
//                   </h1>
//                   <Link
//                     to="/dashboard/add-products"
//                     className="btn myPrimaryBtn mx-auto"
//                   >
//                     Add Products
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//           <Link
//             to="/dashboard/add-product"
//             className="btn btn-block myPrimaryBtn"
//           >
//             Add a Product
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  title: string,
  image: string,
  brand: string,
  availableQuantity: number,
  rating: number,
  price: number,
  _id: string
) {
  return {
    title,
    image,
    brand,
    availableQuantity,
    rating,
    price,
    _id,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

//custom toast component to ensure delete actions
const showToastWithOptions = (deletedProduct) => {
  toast(
    <div className="flex flex-col space-y-2">
      <p>Are you sure you want to proceed?</p>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => toast.dismiss()}
        >
          No
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => {
            deletedProduct();
            toast.dismiss();
            toast.success("Product deleted");
          }}
        >
          Yes
        </button>
      </div>
    </div>,
    {
      duration: 5000, // Optional, how long the toast will stay visible (in milliseconds)
      position: "top-center",
    }
  );
};

function Row(props: { row: ReturnType<typeof createData> }) {
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = (id: string) => {
    showToastWithOptions(() => deleteProduct(id));
    // toast.success("Product deleted");
  };
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row.title);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <img src={row.image} className="h-32 w-60" alt="" />
        </TableCell>
        <TableCell align="right">{row.title}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">
          <div className="flex items-center">
            <Link to={`/dashboard/update-product/${row._id}`}>
              <FaEdit className="text-2xl text-blue-500" />
            </Link>

            <button onClick={() => handleDelete(row._id)}>
              <MdDelete className="text-red-600 text-3xl" />
            </button>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data;

  if (isLoading) {
    return <Loading />;
  }
  type TRow = {
    title: string;
    image: string;
    brand: string;
    availableQuantity: number;
    ratings: number;
    price: number;
    _id: string;
  };
  // Function to convert the array
  const transformArray = (arr: TRow[]) => {
    return arr.map((item) =>
      createData(
        item.title,
        item.image,
        item.brand,
        item.ratings,
        item.availableQuantity,
        item.price,
        item._id
      )
    );
  };

  // Usage
  const rows = transformArray(products);

  console.log(products, "products");
  return (
    <div className="mt-28">
      <Helmet>
        <title>Mecha Freak | Dashboard</title>
      </Helmet>
      <SectionHeader
        title={`Total Products: ${products?.length}`}
        description=" "
      />
      <TableContainer className="mt-10 px-8" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.title} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
