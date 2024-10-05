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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

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

  function createData(
    image: string,
    price: number,
    quantity: number,
    subTotal: number,
    productId: string,

  ) {
    return { image, price, quantity, subTotal, productId };
  }

  type TRowData = {
    image: string;
    price: number;
    quantity: number;
    subTotal: number;
    productId: string;
  }

  const transformArray = (arr : TRowData[]) => {
    return arr.map((item) =>
      createData(item.image, item.price, item.quantity, item.subTotal, item.productId)
    );
  };

  // Usage
  const rows = transformArray(cartItems.items);

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
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">SubTotal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.productId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img src={row.image} className="h-20 w-40" alt="" />
                        </TableCell>

                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                        <button
                          onClick={() => handleDecreaseQuantity(row.productId)}
                          className="btn btn-sm myOutlineBtn mr-2 font-bold text-xl"
                        >
                          -
                        </button>
                        <span className="text-xl font-bold">
                          {" "}
                          {row.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(row.productId)}
                          className="btn btn-sm ml-2 myOutlineBtn font-bold text-xl"
                        >
                          +
                        </button>
                        </TableCell>
                        <TableCell align="right">{(row.subTotal).toFixed(2)}</TableCell>
                        <TableCell><button onClick={() => deleteCart(row.productId)}><DeleteOutline/></button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="text-end my-2">
                <h2 className="text-xl font-bold">
                  Total Quantity:{" "}
                  <span className="text-red-500">
                    {cartItems.totalQuantity}
                  </span>
                </h2>
                <h2 className="text-xl font-bold my-2">
                  Total Price:{" "}
                  <span className="text-red-500">{(cartItems.totalPrice).toFixed(2)} $</span>
                </h2>
                <Link to="/checkout" className="btn myPrimaryBtn">
                  <Button variant="contained" sx={{ backgroundColor: "#247674" }}>
                    checkout
                  </Button>
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
