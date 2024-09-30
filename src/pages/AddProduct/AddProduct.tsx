import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  return (
    <div>
      <Helmet>
        <title>Key Haven | Add Product</title>
      </Helmet>

      <Container>
        <ProductForm />
      </Container>
    </div>
  );
};

export default AddProduct;
