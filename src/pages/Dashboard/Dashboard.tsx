import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/api/productsApi";

import { toast } from "sonner";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/shared/SectionHeader";
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
import { Button } from "@mui/material";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";

function createData(
  title: string,
  image: string,
  brand: string,
  availableQuantity: number,
  rating: number,
  price: number,
  _id: string,
  createdAt : string,
  description : string
) {
  return {
    title,
    image,
    brand,
    availableQuantity,
    rating,
    price,
    _id,
    createdAt,
    details: [
      {
        date: createdAt,
        brand: brand,
        availableQuantity: availableQuantity ,
        description : description
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
        <TableCell align="left">
          <div className="flex items-end justify-end">
            <Link to={`/dashboard/update-product/${row._id}`}>
              <EditOutlined fontSize="large" className="text-2xl text-blue-500" />
            </Link>

            <button onClick={() => handleDelete(row._id)}>
              <DeleteOutlineOutlined fontSize="large" className="text-red-600 text-3xl" />
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
                    <TableCell>Brand</TableCell>
                    <TableCell align="right">Available Quantity</TableCell>
                    <TableCell align="right">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.brand}</TableCell>
                      <TableCell align="right">{historyRow.availableQuantity}</TableCell>
                      <TableCell align="right">
                        {historyRow.description}
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
    createdAt : string,
    description : string
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
        item._id,
        item.createdAt,
        item.description
      )
    );
  };

  // Usage
  const rows = transformArray(products);

  console.log(products, "products");
  return (
    <div className="my-28 text-center">
      <Helmet>
        <title>Mecha Freak | Dashboard</title>
      </Helmet>
      <SectionHeader
        title={`Total Products: ${products?.length}`}
        description=" "
      />
      {products?.length ? (
        <TableContainer className="my-10 px-8" component={Paper}>
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
      ) : (
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
      <Link to="/dashboard/add-product" className="">
        <Button size="large" variant="contained" >
          Add a product
        </Button>
      </Link>
    </div>
  );
}
