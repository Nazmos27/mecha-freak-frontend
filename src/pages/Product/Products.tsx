import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { TProduct, useGetAllProductsQuery } from "../../redux/api/productsApi";
import ProductCard from "../../components/ProductCard";
import Container from "../../components/Container";
import { debounce } from "lodash";
import Loading from "../../components/Loading";
import SectionHeader from "../../components/shared/SectionHeader";

const Products: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const productsPerPage = 9;

  const { data, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: productsPerPage,
    search: debouncedSearchTerm,
  });

  const totalProducts = data?.totalProducts || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Debounce search term
  const debouncedSearch = useCallback(
    debounce((term) => setDebouncedSearchTerm(term), 1000),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-12">
      <Container>
        {/* dynamic title */}
        <Helmet>
          <title>Key Haven | Products</title>
        </Helmet>
        {/* Section header */}
        <SectionHeader
          title="Our Products"
          description="Checkout our latest featured products  and all of our mechanical keyboard and enjoy your typing with latest mechanical keyboard"
        />

        {/* Product search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-blue-500 mt-2 p-2 rounded-md w-full mb-4"
        />

        {/* Product list */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
          {data?.data?.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            className="btn myPrimaryBtn"
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            className="btn myPrimaryBtn"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
